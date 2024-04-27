import React from 'react'
import * as S from './Style.jsx'
import Vnw from './ImagensPortfolio/vnw.png'
import Css from './ImagensPortfolio/css.png'
import Javascript from './ImagensPortfolio/javascript.png'
import Html from './ImagensPortfolio/html.png'

function Sobre() {
    return (
        <S.MainSobre>

            <S.SectionDoSobre>
                <h2>ESTUDOS</h2>
                <S.Card>
                    <S.DivCard>
                        <h2>Desenvolvimento front-end</h2>
                        <h3>AGO/2023 - MAIO/2024</h3>
                        <img src={Vnw} alt="Logo do vnw" />
                    </S.DivCard>

                </S.Card>

            </S.SectionDoSobre>

            <section>
                <h2>HABILIDADES</h2>
                <card>
                    <div>
                        <div>
                          <h3>CSS</h3>
                        <img src={Css} alt="logo css" />  
                        </div>
                        
                        <div>
                          <h3>Js</h3>
                        <img src={Javascript} alt="logo javascript" />  
                        </div>

                        <div>
                             <h3>HTML</h3>
                        <img src={Html} alt="logo html5" />
                        </div>
                        
                       

                    </div>
                </card>

            </section>

            

        </S.MainSobre>

    )
}

export default Sobre