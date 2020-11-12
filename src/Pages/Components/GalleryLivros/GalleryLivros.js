import React from "react";
import "./GalleryLivros.css";

function GalleryLivros(){
    const livros_promocao = [
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
        
    ];
    return (
        <>
            <div className="container">
                {livros_promocao.map((listItem) => {
                    return(
                        <div className="itens-carousel">
                            <img className="livro-carousel" src={listItem.pathName}/>
                                <p className="livro-info">{listItem.nome} <br/> Autor: {listItem.autor}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default GalleryLivros;
