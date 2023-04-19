import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [profils, setProfils] = useState([]);

    useEffect (() => {
        (async function () {
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
          setProfils(data);
        })();
      }, [setProfils])

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <DataContext.Provider value={{ theme, toggleTheme, profils }}>
            {children}
        </DataContext.Provider>
    )
}