import React from "react";
import { fade, IconButton  } from "@material-ui/core";
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';
import "./Carrossel.css";

require("typeface-quicksand");


function Carrossel(){
    return (
            <Carousel className="carousel"  autoplay={true} wrapAround={true} transactionMode={fade} slidesToScroll='auto' disableEdgeSwiping='fatruelse' cellAlign="center" renderCenterLeftControls={({ previousSlide }) => (
                <IconContext.Provider value={{color: "#ffff", size: "5.5rem"}}>
                    <IconButton onClick={ previousSlide}>
                        <IoIosArrowBack/>
                    </IconButton>
                </IconContext.Provider>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                <IconContext.Provider value={{color: "#ffff", size: "5.5rem"}}>
                    <IconButton onClick={ nextSlide }>
                        <IoIosArrowForward/>
                    </IconButton>
                </IconContext.Provider>
                )}
                defaultControlsConfig={{
                pagingDotsStyle: {
                    fill: 'white'
                }
                }}>
                
                <div className="content">
                    <img alt="imagem" className="capa-imagem" src="/images/slide-1.png"/>
                    <h1 className="texto-principal globalTitle">Bem Vindo ao site</h1>
                    <h1 className="subtexto globalTitle">do sebo</h1>
                    <img alt="imagem" className="texto-imagem" src="/images/logo-branca.png"/>
                    <Button  className="button left" variant="dark">
                        Cadastre-se já!
                    </Button>
                    <Button className="button right" variant="light">
                        Doe um Exemplar
                    </Button>
                </div>
                <div className="content">
                <img alt="imagem" className="capa-imagem" src="/images/slide-2.png"/>
                <h1 className="texto globalTitle">Conheça nossa história:</h1>
                <Button  className="button center" variant="light">
                    Nossa História
                </Button>
                </div>
                <div className="content">
                <img alt="imagem" className="capa-imagem" src="/images/slide-3.jpg"/>
                <h1 className="texto globalTitle">Conheça nosso acervo:</h1>
                <Button  className="button center" variant="light">
                    Nossos livros
                </Button>
                </div>
        </Carousel>
    );
}

export default Carrossel;