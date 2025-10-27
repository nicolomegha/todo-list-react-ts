import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };


  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

 
  const appStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <ThemeContext.Provider value={value}>
      <div style={appStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve essere usato all’interno di un ThemeProvider');
  }
  return context;
};
