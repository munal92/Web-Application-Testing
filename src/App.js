import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js'
import Display from './components/Display'
import styled from 'styled-components'



export const tmBsbll = timeBasbll => {
    return timeBasbll + 37 ; 
};

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  
  const Container = styled.div`
    border: 3px solid yellow;
    padding : 25px;
    width: 30% ; 
    align-content : center ;
    margin: 5px auto 0 ;
    background-color : gray ; 
  `

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  return (
    <Container className='container'>
      <Display strikes={strikes} balls={balls}/>
      <Dashboard  ball={ball} strike={strike} foul={foul} hit={hit}/>
    </Container>
  );
}
export default App;