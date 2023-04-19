import { useState } from "react"
import PropTypes from "prop-types"
import DefaultPicture from '../assets/profile.png'
import styled from 'styled-components'
import colors from '../utils/style/colors.js'

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
`
const CardImage = styled.img`
    height: 300px;
    width: auto;
    border-radius: 50%;
    transform: scale(${({size}) => size})
`

const CardTitle = styled.span`
    color: #5843e4;
    font-size: 27px;
    font-weight: bold;
    text-align: center;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 30em;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

export default function Card({ label, title, picture, company }) {

    const [size, setSize] = useState(1);

    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage onClick={() => setSize(size + 0.1)} size={size} src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
            <CardTitle>societé : {company}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
 
Card.defaultProps = {
    title: "",
    label: "",
    picture: DefaultPicture
}