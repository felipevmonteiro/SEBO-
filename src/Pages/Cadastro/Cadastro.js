import React from 'react'
import "./cadastro.css"
require('typeface-quicksand')

function Cadastro() {
    return(
        <div className="Cadastro">
            <div className = "base">
                <div className = "container">
                    <h1 className = "textbook">
                        Comece sua história no Sebo Hai Kai
                    </h1>
                    <div className = "containbook">
                        <img 
                        className = "book" 
                        src="/images/LivroFinal2Cadastro.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;