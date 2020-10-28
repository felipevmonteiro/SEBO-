import React from "react";
import "./NossosLivros.css";

require("typeface-quicksand");

function NossosLivros(){
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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <div className="NossosLivros">
                
                <div className="section-1">
                    <h1 className="title">Nossos Livros:</h1>
                    <img alt="imagem" className="imagem-right" height="406" width="406" src="/images/ramo-cerejeira-3.png"/>
                    
                    <div className="search-right">
                        <div className="input-group">
                            <input className="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Pesquisar..."/>
                            <span className="input-group-append">
                                <button className="btn rounded-pill border-0 ml-n5" type="button">
                                    <img width="28px" height="28px" src="/images/button-search.png"/>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <h1 className="subtitle">Em Promoção:</h1>
                    {livros.map((listItem) => {
                        return(
                            <div className="itens-carousel">
                                <img className="livro-carousel" src={listItem.pathName}/>
                                <p className="livro-info">{listItem.nome} <br/> Autor: {listItem.autor}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default NossosLivros;