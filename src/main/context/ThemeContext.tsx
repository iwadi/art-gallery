// This is necessary to work with the theme on the site.
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        try {
            const saved = localStorage.getItem('theme');
            // We check that the value exists and is valid JSON.
            if (saved) {
                const parsed = JSON.parse(saved);
                // Additional check that it is a boolean
                return typeof parsed === 'boolean' ? parsed : false;
            }
            return false;
        } catch (error) {
            console.error('Error parsing theme from localStorage:', error);
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDark));
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};