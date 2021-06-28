// Write your Character component here
import React from 'react'
import styled from 'styled-components'
const Character = (props) => {
    const Card = styled.section`
    display: inline-block;
    justify-content: center;
    `;
    return(
        <Card >{
        props.characters.map((character) => (
            <>
            <h2>{character.name}</h2>
            </>
        ))}
        </Card>)
}

export default Character

