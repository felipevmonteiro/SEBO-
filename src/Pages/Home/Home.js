import { IconButton } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { render } from "react-dom";
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Home(){
    const history = useHistory();

    return (
        <Carousel  renderCenterLeftControls={({ previousSlide }) => (
            <IconButton onClick={ previousSlide} className="icon">
                <IoIosArrowBack/>
            </IconButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton onClick={ nextSlide } className="icon">
                <IoIosArrowForward/>
            </IconButton>
          )}>
            <img alt="imagem" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
            <img alt="imagem" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            <img alt="imagem" src="/images/familia-miyako.jpg"/>
            <img alt="imagem" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
            <img alt="imagem" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
            <img alt="imagem" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    );
}

export default Home;