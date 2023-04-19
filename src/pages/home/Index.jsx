import {ReactComponent as ReactHome} from "../../assets/home-illustration.svg"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from 'react-router-dom'

const Home = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLight};
  padding: 4em 1em;
`
const HomeText = styled.div`
  width: 40%;
  & h3 {
    font-size: 40px;
    line-height: 1.7em;
  }
`
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

function App() {
  return (
    <Home>
      <HomeText>
        <h3>Repérez vos besoins,on s’occupe du reste, avec les meilleurs talents</h3>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </HomeText>
      <ReactHome />
    </Home>
  );
}

export default App;
