const fs = require('fs');
const path = require('path');

// CSV file path
const CSV_FILE_PATH = path.join(process.cwd(), 'domain-search-users.csv');

// CSV headers
const CSV_HEADERS = 'Name,Email,Profile Picture,Timestamp,Search Term,IP Address\n';

// Initialize CSV file if it doesn't exist
const initializeCSV = () => {
  if (!fs.existsSync(CSV_FILE_PATH)) {
    fs.writeFileSync(CSV_FILE_PATH, CSV_HEADERS);
  }
};

// Save user data to CSV
const saveUserToCSV = (userData) => {
  try {
    initializeCSV();
    
    const {
      name = '',
      email = '',
      picture = '',
      timestamp = new Date().toISOString(),
      searchTerm = '',
      ipAddress = ''
    } = userData;

    // Escape quotes and commas in data
    const escapeCsvField = (field) => {
      if (typeof field !== 'string') field = String(field);
      if (field.includes(',') || field.includes('"') || field.includes('\n')) {
        return `"${field.replace(/"/g, '""')}"`;
      }
      return field;
    };

    const csvRow = [
      escapeCsvField(name),
      escapeCsvField(email),
      escapeCsvField(picture),
      escapeCsvField(timestamp),
      escapeCsvField(searchTerm),
      escapeCsvField(ipAddress)
    ].join(',') + '\n';

    // Check if user already exists
    const existingData = fs.readFileSync(CSV_FILE_PATH, 'utf8');
    const lines = existingData.split('\n');
    const userExists = lines.some(line => line.includes(email) && email !== '');

    if (!userExists) {
      // Append new user data
      fs.appendFileSync(CSV_FILE_PATH, csvRow);
      console.log(`User data saved to CSV: ${email}`);
      return { success: true, message: 'User data saved successfully' };
    } else {
      console.log(`User already exists in CSV: ${email}`);
      return { success: true, message: 'User already exists' };
    }

  } catch (error) {
    console.error('Error saving to CSV:', error);
    return { success: false, error: error.message };
  }
};

// Read all users from CSV
const getAllUsersFromCSV = () => {
  try {
    if (!fs.existsSync(CSV_FILE_PATH)) {
      return { success: true, data: [] };
    }

    const csvData = fs.readFileSync(CSV_FILE_PATH, 'utf8');
    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length <= 1) {
      return { success: true, data: [] };
    }

    // Parse CSV data (skip header)
    const users = lines.slice(1).map(line => {
      const [name, email, picture, timestamp, searchTerm, ipAddress] = line.split(',');
      return {
        name: name?.replace(/"/g, '') || '',
        email: email?.replace(/"/g, '') || '',
        picture: picture?.replace(/"/g, '') || '',
        timestamp: timestamp?.replace(/"/g, '') || '',
        searchTerm: searchTerm?.replace(/"/g, '') || '',
        ipAddress: ipAddress?.replace(/"/g, '') || ''
      };
    });

    return { success: true, data: users };
  } catch (error) {
    console.error('Error reading CSV:', error);
    return { success: false, error: error.message };
  }
};

// Export CSV file path for download
const getCSVFilePath = () => {
  return CSV_FILE_PATH;
};

module.exports = {
  saveUserToCSV,
  getAllUsersFromCSV,
  getCSVFilePath,
  initializeCSV
};