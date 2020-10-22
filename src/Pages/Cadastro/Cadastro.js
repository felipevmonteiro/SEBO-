import React from 'react'
import "./cadastro.css"
require('typeface-quicksand')

function Cadastro() {
    return(
    
        <div className="Cadastro">
    

      
                <div className = "container">
                <div className = "base">
            
                    <h1 className = "textbook">
                        Comece sua história no Sebo Hai Kai
                        <br/>
                    </h1>
                    <div className = "containbook">
                        
                        <div className = "dados1">
                            <label for= "nome">Nome: </label>
                            <br/>                            
                            <input type ="text"></input>
                            <br/><br/>
                            
                            <label for= "email">Email: </label>
                            <br/>                            
                            <input type ="text"></input>
                            <br/><br/>
                            
                            <label for= "endereco">Endereço: </label>
                            <br/>                           
                            <input type ="text"></input>
                            <br/><br/>
                            
                            <label for= "cep">CEP: </label>
                            <br/>
                            <input type ="text"></input>
                        </div>
                        <div className ="dados2"> 
                        <label for= "telefone">Telefone de contato: </label>
                            <br/>                            
                            <input type ="text"></input>
                            <br/><br/><br/><br/>
                            
                            <label for= "livro">Livro favorito: </label>
                            <br/>                            
                            <input type ="text"></input>
                        </div>
                        <div className ="posicaocaneta">
                        <img alt="imagem" src="/images/canetahaikai.png" className = "caneta"/>

                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
    )
}
export default Cadastro;