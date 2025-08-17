import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { saveUserDataLocally } from '../utils/csvStorage';
import { 
  Search, 
  Globe, 
  Check, 
  X, 
  ArrowRight,
  Loader,
  AlertCircle,
  Star,
  Shield,
  Zap,
  Clock,
  Phone,
  User,
  LogOut
} from 'lucide-react';

interface DomainResult {
  domain: string;
  available: boolean;
  price: number;
  premium: boolean;
  extension: string;
}

interface UserData {
  name: string;
  email: string;
  picture?: string;
}

function DomainSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<DomainResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Popular extensions to check
  const extensions = ['.com', '.net', '.org', '.in', '.co', '.io', '.tech', '.online'];

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    
    try {
      // In a real implementation, you would use Google OAuth
      // For demo purposes, we'll simulate the sign-in
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data - replace with actual Google OAuth response
      const mockUser: UserData = {
        name: "John Doe",
        email: "john.doe@example.com",
        picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      };
      
      // Save user data with timestamp
      const userDataWithTimestamp = {
        ...mockUser,
        timestamp: new Date().toISOString()
      };
      
      // Save to local storage and CSV
      saveUserDataLocally(userDataWithTimestamp);
      
      setUser(mockUser);
      localStorage.setItem('domainSearchUser', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Sign-in failed:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setSearchResults([]);
    setSearchTerm('');
    localStorage.removeItem('domainSearchUser');
  };

  // Check for existing user session on component mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('domainSearchUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Mock domain search function (replace with actual Namecheap API)
  const searchDomains = async (domain: string) => {
    if (!user) {
      alert('Please sign in to search for domains');
      return;
    }
    
    // Save search term to user data
    if (user) {
      const searchData = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        timestamp: new Date().toISOString(),
        searchTerm: domain
      };
      saveUserDataLocally(searchData);
    }
    
    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Clean and process the domain input
    let cleanDomain = domain.toLowerCase().replace(/[^a-z0-9.-]/g, '');
    let searchExtensions = [...extensions];
    
    // Check if user entered a domain with extension
    const hasExtension = extensions.some(ext => cleanDomain.endsWith(ext));
    
    if (hasExtension) {
      // Extract the base domain and the extension
      const foundExt = extensions.find(ext => cleanDomain.endsWith(ext));
      if (foundExt) {
        const baseDomain = cleanDomain.replace(foundExt, '');
        cleanDomain = baseDomain;
        // Put the user's requested extension first in results
        searchExtensions = [foundExt, ...extensions.filter(ext => ext !== foundExt)];
      }
    }
    
    // Mock results - replace with actual Namecheap API call
    const mockResults: DomainResult[] = searchExtensions.map(ext => ({
      domain: `${cleanDomain}${ext}`,
      available: Math.random() > 0.4, // Random availability
      price: ext === '.com' ? 12.99 : ext === '.io' ? 39.99 : ext === '.tech' ? 19.99 : 9.99,
      premium: Math.random() > 0.8,
      extension: ext
    }));

    setSearchResults(mockResults);
    setIsSearching(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to search for domains');
      return;
    }
    if (searchTerm.trim()) {
      searchDomains(searchTerm.trim());
    }
  };


  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Free Privacy Protection",
      description: "WHOIS privacy included with every domain"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Activation",
      description: "Your domain is ready to use immediately"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Expert support whenever you need it"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Easy Management",
      description: "Simple domain management dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Find Your Domain
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Search and register the perfect domain name for your business. Get started with your online presence today.
            </p>

            {/* Google Sign-In or Domain Search */}
            {!user ? (
              <div className="max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <User className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Sign In Required</h3>
                    <p className="text-gray-300">Please sign in with Google to search for domains</p>
                  </div>
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={isSigningIn}
                    className="w-full bg-white text-gray-800 px-6 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSigningIn ? (
                      <>
                        <Loader className="w-5 h-5 mr-3 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                {/* User Info */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center space-x-4">
                    {user.picture && (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div className="text-white">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-gray-300 ml-2">({user.email})</span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-300 hover:text-white transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Domain Search Form */}
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Enter your domain name..."
                      className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                      disabled={isSearching}
                    />
                    <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching || !searchTerm.trim()}
                    className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSearching ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        Search Domains
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {user && searchResults.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Domain Search Results
              </h2>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.domain}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      result.available
                        ? 'border-gray-200 hover:border-accent/50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          result.available ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {result.available ? (
                            <Check className="w-6 h-6 text-green-600" />
                          ) : (
                            <X className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">
                            {result.domain}
                          </h3>
                          <p className={`text-sm ${
                            result.available ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {result.available ? 'Available' : 'Not Available'}
                          </p>
                          {result.premium && (
                            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-1">
                              Premium
                            </span>
                          )}
                        </div>
                      </div>

                      {result.available && (
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                              ${result.price}
                            </p>
                            <p className="text-sm text-gray-600">per year</p>
                          </div>
                          <a
                            href="tel:+918318379651"
                            className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call to Register
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Why Choose Our Domain Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get more than just a domain name with our comprehensive domain services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-accent mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Extensions */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-12">
              Popular Domain Extensions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {extensions.map((ext, index) => (
                <motion.div
                  key={ext}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-accent hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-lg">{ext}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Get Online?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Start your online journey today with the perfect domain name for your business
            </p>
            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DomainSearch;