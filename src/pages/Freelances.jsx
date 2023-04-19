import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { useContext } from 'react'
import { DataContext } from '../utils/Context'

const CardContainer = styled.div`
    display: grid;
    gap: 5em;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
`
const TitleProfils = styled.h3`
    font-size: 30px;
    color: ${colors.primary}
`
const ParaProfils = styled.p`
    font-size: 19px;
    margin-bottom: 2em;
`
const Profils = styled.div` 
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
`
export default function Freelances () {

    const { profils } = useContext(DataContext);

    return <Profils >
        <TitleProfils>Trouver votre prestataires</TitleProfils>
        <ParaProfils>Chez Shiny nous réunissons les meilleurs profils pour vous.</ParaProfils>
        <CardContainer>
            {profils.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.username}
                    title={profile.name}
                    company={profile.company.name}
                />
            ))}
        </CardContainer>
    </Profils>
}
