
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface APIKeyContextType {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  clearApiKey: () => void;
}

const LOCAL_STORAGE_KEY = 'history_explorer_api_key';

const APIKeyContext = createContext<APIKeyContextType | null>(null);

export const APIKeyProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKeyState] = useState<string | null>(null);

  // Load API key from localStorage on initial render
  useEffect(() => {
    const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedKey) {
      setApiKeyState(savedKey);
    }
  }, []);

  // Set API key and save to localStorage
  const setApiKey = (key: string) => {
    setApiKeyState(key);
    localStorage.setItem(LOCAL_STORAGE_KEY, key);
  };

  // Clear API key from state and localStorage
  const clearApiKey = () => {
    setApiKeyState(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <APIKeyContext.Provider value={{ apiKey, setApiKey, clearApiKey }}>
      {children}
    </APIKeyContext.Provider>
  );
};

export const useAPIKey = () => {
  const context = useContext(APIKeyContext);
  if (!context) {
    throw new Error('useAPIKey must be used within an APIKeyProvider');
  }
  return context;
};
