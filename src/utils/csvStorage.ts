interface UserData {
  name: string;
  email: string;
  picture?: string;
  timestamp: string;
  searchTerm?: string;
}

export const saveUserToCSV = async (userData: UserData) => {
  try {
    // Send user data to backend API to save in CSV
    const response = await fetch('/api/save-user-csv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to save user data');
    }

    return { success: true };
  } catch (error) {
    console.error('Error saving user data to CSV:', error);
    return { success: false, error };
  }
};

export const downloadCSV = (data: UserData[], filename: string = 'domain-search-users.csv') => {
  // Create CSV content
  const headers = ['Name', 'Email', 'Profile Picture', 'Timestamp', 'Search Term'];
  const csvContent = [
    headers.join(','),
    ...data.map(user => [
      `"${user.name}"`,
      `"${user.email}"`,
      `"${user.picture || ''}"`,
      `"${user.timestamp}"`,
      `"${user.searchTerm || ''}"`
    ].join(','))
  ].join('\n');

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Client-side storage as backup
export const saveUserDataLocally = (userData: UserData) => {
  try {
    const existingData = localStorage.getItem('domainSearchUsers');
    const users: UserData[] = existingData ? JSON.parse(existingData) : [];
    
    // Check if user already exists (by email)
    const existingUserIndex = users.findIndex(user => user.email === userData.email);
    
    if (existingUserIndex >= 0) {
      // Update existing user
      users[existingUserIndex] = { ...users[existingUserIndex], ...userData };
    } else {
      // Add new user
      users.push(userData);
    }
    
    localStorage.setItem('domainSearchUsers', JSON.stringify(users));
    return { success: true };
  } catch (error) {
    console.error('Error saving user data locally:', error);
    return { success: false, error };
  }
};

export const getAllUsersFromLocal = (): UserData[] => {
  try {
    const data = localStorage.getItem('domainSearchUsers');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return [];
  }
};