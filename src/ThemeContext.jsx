import { createContext, useContext, useState,useEffect } from "react";


const ThemeContext = createContext();

export const useTheme =()=> {
    return useContext(ThemeContext)
}

export const ThemeContextProvider = ({children}) =>{
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setTheme=()=>{
        setIsDarkMode((prevMode)=> !prevMode);
    }
    
    const theme = isDarkMode ? 'dark':'light';

    useEffect(()=>{
        if(theme === 'dark'){
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        }
        
    },[isDarkMode]);

    const values = {
        theme,
        setTheme
    }
    return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}