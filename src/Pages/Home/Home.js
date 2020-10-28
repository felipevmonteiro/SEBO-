import Button from 'react-bootstrap/Button'
import { colors, fade, IconButton  } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { render } from "react-dom";
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { Badge } from 'react-bootstrap'
require("typeface-quicksand")


function Home(){
    const history = useHistory();
    function cadastrese(){
      history.push("Cadastro")
    }
    function livros(){
      history.push("Nossoslivros")
    }

    return (
      
      <>
        
        <Carousel autoplay={false} cellAlign="center" renderCenterLeftControls={({ previousSlide }) => (
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
              <Button  className="button left" variant="dark" onClick = {cadastrese}>
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
              <Button  className="button center" variant="light" onClick = {livros}>
                Nossos livros
              </Button>
            </div>
      </Carousel>

      <div className="section-2">
        <h1 className="globalTitle">
          Novidades da <Badge variant="secondary">semana</Badge></h1>
        <img alt="imagem" className="capa-imagem" src="/images/section-2.png"/>
      </div>
      
      <div className="section-3">
        <img alt="imagem" className="imagem-right" height="284" width="199" src="/images/livros/hai-kai.jpg"/>
      </div>

      <div className="section-4">
        <img alt="imagem" className="imagem-right" height="485" width="466" src="/images/nossa-historia.png"/>
      </div>

      <div className="section-5">
        <img alt="imagem" className="imagem-left" height="306" width="306" src="/images/ramo-cerejeira-2.png"/>
      </div>
    </>
    );
}

export default Home;