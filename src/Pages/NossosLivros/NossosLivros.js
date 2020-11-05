import React from "react";
import Footer from "../Components/Footer/Footer";
import GalleryLivros from "../Components/GalleryLivros/GalleryLivros";
import Livros from "../Components/Livros/Livros";
import "./NossosLivros.css";

require("typeface-quicksand");

function NossosLivros(){
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
                    <p className="subtitle">Em Promoção:</p>
                    <GalleryLivros/>
                </div>
                
                <div className="section-3">
                    {/*<img alt="imagem" className="imagem-left" src="/images/arvore-nossos-livros.png"/>*/}
                    <div className="livro-container">
                        <Livros/>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export default NossosLivros;