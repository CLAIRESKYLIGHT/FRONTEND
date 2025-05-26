// API configuration
const getApiUrl = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // Use the current hostname to determine the API URL
    const hostname = window.location.hostname;
    
    // If we're on localhost, use the local API
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3001/api';
    }
    
    // For production (Vercel), use the environment variable
    return process.env.NEXT_PUBLIC_API_URL || 'https://lmsystem-pga4.onrender.com/api';
  }
  
  // Default fallback
  return 'http://localhost:3001/api';
};

export const API_URL = getApiUrl();

// Helper function to make API calls
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Include cookies for authentication
  };

  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}; 