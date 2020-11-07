import React from 'react'
import "./adicionar.css"
import { useHistory } from 'react-router-dom' 
import {Form, FormGroup} from 'react-bootstrap' 
import Button from 'react-bootstrap/Button' 
import { useState } from 'react'
require('typeface-quicksand')

function AdicionarExemplar(){
    const history = useHistory(); 
    const [nome,setNome] = useState();
    function Home(){ 
        alert("Exemplar cadastrado com sucesso!") 
        history.push("Home") 
    } 
return(
    <div className="AdicionarEx">
    <div className="button">
        <Button variant="danger" onClick = {Home}>Adicionar exemplar!</Button>
    </div>
    <div className ="background">
        <div className = "background2">
                <div className = "container">
                    <div className = "base">

                    <h1 className = "textbook">
                        Adicione um novo exemplar!
                        <br/>
                    </h1>

                    <div className = "containbook">
                        <img 
                        src="/images/LivroFinal2Cadastro.jpg">
                        </img>
                        <div className ="dados1aux">
                            <Form className = "dados1">
                                
                                <Form.Group controlId="nome"> 
                                    <Form.Label >Nome do Livro</Form.Label> 
                                    <Form.Control plaintext size="sm" placeholder="Nome do livro..."
                                    onChange = {(e) => setNome(e.target.value)}/> 
                                </Form.Group> 
                                <br/>
                                <Form.Group controlId="autor"> 
                                    <Form.Label>Autor</Form.Label> 
                                    <Form.Control plaintext size="sm" placeholder="Fulano de Tal da SIlva..." /> 
                                </Form.Group> 
                                <br/>
                                <Form.Group controlId="edição"> 
                                    <Form.Label>Edição do livro</Form.Label> 
                                    <Form.Control plaintext size="sm" placeholder="Xº edição..." /> 
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="estado"> 
                                    <Form.Label>Condições do livro</Form.Label> 
                                    <Form.Control  plaintext size="sm" placeholder="Novo, usado..." /> 
                                </Form.Group>                                        
                            </Form>
                        </div>    
                        <div className = "dados2aux">
                        <Form className = "dados2">
                        
                            <Form.Group controlId="qtd"> 
                                <Form.Label>Quantidade de exemplares</Form.Label> 
                                <Form.Control plaintext size="sm" placeholder="X exemplares..." /> 
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="Preço"> 
                                <Form.Label>Preço do exemplar</Form.Label> 
                                <Form.Control plaintext size="sm" placeholder="X reais..." /> 
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="resumo"> 
                                <Form.Label>Resumo do livro</Form.Label> 
                                <Form.Control plaintext size="sm" placeholder="Essa é uma historia tal tal..." /> 
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="imglivro"> 
                                    <Form.Label>Foto do livro</Form.Label> 
                                    <input type="file" class="form-control-file form-control-sm" id="exampleFormControlFile1" />
                            </Form.Group>
                        </Form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)



}

export default AdicionarExemplar;