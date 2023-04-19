import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../utils/Context'
import styled from 'styled-components'
import colors from '../utils/style/colors.js'
import logodark from '../assets/dark-logo.png'
import logolight from '../assets/light-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    margin: 20px;
    color: #8186a0;
    text-decoration: none;
    font-size: 20px;
    ${(props) => 
    props.$isFullLink && 
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const Logo = styled.img`
    width: 300px;
    height: auto;
`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;

`
export default function Header() {

    const { theme } = useContext(DataContext);

    return (
        <NavBar>
            <Logo src={theme === "light" ? logodark : logolight} alt="freelance"/>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </div>
        </NavBar>
    )
}
