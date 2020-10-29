import React from "react";
import "./Livros.css";
import Button from 'react-bootstrap/Button';

function Livros(){
    const livros = [
        {
            nome: "Livro: O Auto da Compadecida",
            autor: "Ariano Suassuna",
            pathName: "/images/livros/promocao/auto-da-compadecida.jpg",
        },
        {
            nome: "Livro: A Revolução dos Bichos",
            autor: "George Orwell",
            pathName: "/images/livros/promocao/revolucao-dos-bichos.jpg",
        },
        {
            nome: "Livro: Lolita",
            autor: "Vladimir Nabokov",
            pathName: "/images/livros/promocao/lolita.jpg",
        },
        {
            nome: "Livro: Vidas Secas",
            autor: "Graciliano Ramos",
            pathName: "/images/livros/promocao/vidas-secas.jpg",
        },
        {
            nome: "Livro: A Vida Não é Útil",
            autor: "Ailton Krenak",
            pathName: "/images/livros/promocao/a-vida-nao-e-util.jpg",
        },
        {
            nome: "Livro: Vigadores - Guerra dos Reinos",
            autor: "Aaron McGuiness",
            pathName: "/images/livros/promocao/vingadores-guerra-dos-reinos.jpg",
        },
    ];
    return (
        <>
            {livros.map((listItem) => {
                return(
                    <div className="livro">
                        <div>
                            <img className="img-format" src={listItem.pathName}/>
                        </div>

                        <div className="titulo-livro">
                            {listItem.nome}
                        </div>

                        <div className="autor-livro">
                            {listItem.autor}
                        </div>

                        <div className="ver-livro">
                            <Button  className="botao format">
                                Ver Livro
                            </Button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Livros;
