import React, { createContext, useState, useContext } from 'react';

// Create a context for compliments
const ComplimentsContext = createContext();

// Create a provider component to wrap your app
export const ComplimentsProvider = ({ children }) => {
  const [compliments, setCompliments] = useState([
    'You are awesome!',
    'You have a great smile!',
    // Add more compliments here
  ]);

  return (
    <ComplimentsContext.Provider value={{ compliments, setCompliments }}>
      {children}
    </ComplimentsContext.Provider>
  );
};

// Create a custom hook to access compliments
export const useCompliments = () => {
  return useContext(ComplimentsContext);
};

export default ComplimentsContext