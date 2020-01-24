import React from 'react'
import styled from 'styled-components'

export default function Dashboard(props) {
    const Button = styled.button`
        width: 10%
            
    `
    const Buttons = styled.div`
        width: 90%;
        margin-left: 30%;     
    `
  return (
    <Buttons>
        <Button className="button" onClick={props.ball}>Ball</Button>
        <Button className="button" onClick={props.foul}>Foul</Button>
        <Button className="button" onClick={props.hit}>Hit</Button>
        <Button className="button" onClick={props.strike}>Strike</Button>
    </Buttons>
  )
}