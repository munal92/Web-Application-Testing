import React from 'react'
import styled from 'styled-components'

export default function Display(props) {
    const Container = styled.div`
    width: 90%;
    margin-left: 30%;   
    `
    return (
        <Container>
            <h2>Strikes : {props.strikes}</h2>
            <h2>Balls : {props.balls}</h2>
        </Container>
    )
}