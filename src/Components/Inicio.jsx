import React from 'react'
import Perfil from './ImagensPortfolio/perfil.jpeg'
import * as S from "./Style.jsx"

function Inicio(){
return(
<S.ContainerInicio>
    <S.Perfil src={Perfil} alt="perfil da janaina" />
    <div>
        <h2>Olá, eu sou a Janaina </h2>
        <h2>Bem vindos ao o meu portólio.</h2>
    </div>

</S.ContainerInicio>
)
}

export default Inicio