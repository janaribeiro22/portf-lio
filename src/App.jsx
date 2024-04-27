import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navegacao from './Components/Navegacao.jsx'


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: #4d4d4d;
    color: #5f5de4;
   font-family: 1'Inter, Inter-Regular, sans-serif;
   }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  )
}

export default App