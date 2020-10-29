import React from "react";
import { useHistory } from "react-router-dom";
import Carrossel from "../Components/Carrossel/Carrossel";
import "./Home.css";
require("typeface-quicksand");

function Home(){
    const history = useHistory();

    return (
      <>
      <Carrossel/>

      <div className="section-2">
        <img alt="imagem" className="imagem" src="/images/section-2.png"/>
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