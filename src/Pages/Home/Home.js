import { colors, IconButton, withTheme } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { render } from "react-dom";
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Badge } from 'react-bootstrap'
require("typeface-quicksand")

function Home(){
    const history = useHistory();
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
            }} >           
            <img alt="imagem" src="/images/slide-1.png"/>
            <img alt="imagem" src="/images/familia-miyako.jpg"/>
            <img alt="imagem" src="/images/slide-3.jpg"/>    
                
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