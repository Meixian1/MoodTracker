import React, { createContext, useState, useContext } from 'react';

// Create a context for currentMood
const CurrentMoodContext = createContext();

// Create a provider component to wrap your app
export const CurrentMoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState('happy');

  return (
    <CurrentMoodContext.Provider value={{ currentMood, setCurrentMood }}>
      {children}
    </CurrentMoodContext.Provider>
  );
};

// Create a custom hook to access currentMood
export const useCurrentMood = () => {
  return useContext(CurrentMoodContext);
};

export default CurrentMoodContext 