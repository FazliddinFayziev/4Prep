import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    
    const [userLanguage, setUserLanguage] = useState('eng');

    const getStoredLanguage = () => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage ? JSON.parse(storedLanguage) : { eng: true, uz: false, ru: false };
    };
    
    const [language, setLanguage] = useState(getStoredLanguage());
    
    const changeLanguage = (selectedLanguage) => {
        setUserLanguage(selectedLanguage);
        setLanguage({ eng: false, uz: false, ru: false }); 
        setLanguage(prevLanguage => ({ ...prevLanguage, [selectedLanguage]: true }));
    };

    useEffect(() => {
        localStorage.setItem('language', JSON.stringify(language));
    }, [language]);


    // Text - 1
    const home = "Home"

    // Text - 2
    const login = "Login"

    // Text - 3
    const error = "Error"

    return <AppContext.Provider value={{

        // export all elements
        home, login, error,
        changeLanguage,
        language, setLanguage, 
        userLanguage, setUserLanguage,

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}