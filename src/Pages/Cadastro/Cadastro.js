import React from 'react'
import "./cadastro.css"
require('typeface-quicksand')

function Cadastro() {
    return(
        <div className = "base">
            <div id = "container">
                <h1 id = "textbook">
                    Comece sua história no Sebo Hai Kai
                </h1>
                <div id = "containbook">
                    <img 
                    id = "book" 
                    src="/images/LivroFinal2Cadastro.jpg"/>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;