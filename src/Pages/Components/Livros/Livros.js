import React from "react";
import "./Livros.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Livros(){
    const history = useHistory();
    const livros = [
        {
            nome: "Livro: O Auto da Compadecida",
            autor: "Ariano Suassuna",
            descricao: "O Auto da Compadecida consegue o equilíbrio perfeito entre a tradição popular e a elaboração literária ao recriar para o teatro episódios registrados na tradição popular do cordel. É uma peça teatral em forma de Auto em 3 atos, escrita em 1955 pelo autor paraibano Ariano Suassuna. Sendo um drama do Nordeste brasileiro, mescla elementos como a tradição da literatura de cordel, a comédia, traços do barroco católico brasileiro e, ainda, cultura popular e tradições religiosas. Apresenta na escrita traços de linguagem oral [demonstrando, na fala do personagem, sua classe social] e apresenta também regionalismos relativos ao Nordeste. Esta peça projetou Suassuna em todo o país e foi considerada, em 1962, por Sábato Magaldi o texto mais popular do moderno teatro brasileiro",
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
        {
            nome: "O Menino Maluquinho",
            autor: "Ziraldo",
            pathName: "/images/livros/o-menino-maluquinho.png",
        },
        {
            nome: "Hai Kai",
            autor: "Elza Tacko Doi",
            pathName: "/images/livros/hai-kai.jpg",
        }
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
                            <Button  className="botao format" variant="light" onClick = {
                            () => history.push("/resumo")}>
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
