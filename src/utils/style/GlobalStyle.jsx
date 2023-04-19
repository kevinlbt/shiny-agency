import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react'
import { DataContext } from '../Context'

const StyledGlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
    margin: 0;  
  }
`
export default function GlobalStyle () {
    const { theme } = useContext(DataContext);

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}