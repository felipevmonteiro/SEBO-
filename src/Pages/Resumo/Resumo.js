import React from "react";
import Footer from "../Components/Footer/Footer";
import Livros from "../Components/Livros/Livros";
import "./Resumo.css";

require("typeface-quicksand");

function Resumo(props){
    return (
        <>
            <div className="resumo">
                    <div className="imagem-livro">
                        <img className="img-format" src="images/livros/lua-nova.jpg"/>
                    </div>

                    <div className="dados">
                        <div className="titulo-livro">
                            Lua Nova
                        </div>

                        <div className="autor-livro">
                            Sthephanie Meyer
                        </div>

                        <div className="descricao-livro">
                            Lua Nova é um romance escrito por Stephenie Meyer para jovens adultos sobre vampiros. Foi originalmente publicado em 2006, tendo sido editado em Portugal em 2007 e no Brasil no dia 27 de setembro de 2008. Segundo volume da série Twilight, relata o afastamento de Bella e Edward.
                        </div>

                        <div className="classificacao">
                            <img src="images/avaliacao.png"/>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}

export default Resumo;