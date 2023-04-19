
import styled from 'styled-components'
import {ReactComponent as ReactLogo} from "../assets/404.svg"

const ErrorImg = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`
export default function Error() {
    return (
        <div>
            <ErrorImg>
                <ReactLogo />
            </ErrorImg>
        </div>
    )
}
 
