import React from "react";
import Carrossel from "../Components/Carrossel/Carrossel";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
require("typeface-quicksand");


function Home(){
 
    return (
      
      <>
      <Carrossel/>
        <div className="Home">
        <div className="section-2">
          <h1 className="TitleS2"><span class="badge badge-danger">Novidades</span> da semana</h1>
          <img src=""/>
        </div>
        
        <div className="section-3">
          <h1 className="TitleS3">Livro em <span class="badge badge-danger">destaque</span> da semana!</h1>
          <p className ="TextoLivroS3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel quam et nunc sollicitudin ullamcorper quis eget ante. Mauris sed magna non enim placerat imperdiet sit amet id ante. Maecenas dignissim metus quis laoreet mollis. Praesent viverra suscipit erat non cursus. Aliquam tellus orci, aliquam sit amet sem eu, tempus viverra orci. Quisque cursus pharetra metus non tincidunt. Aenean placerat elementum lorem, sit amet placerat lorem cursus sit amet. Curabitur pulvinar augue tellus, sit amet faucibus nulla volutpat eu.</p>
          
        </div>

        <div className="section-4">
          <h1 className = "TitleS4" id="historia"><br/>Conheça nossa História!</h1>
          <p className ="TextoHistoriaS4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel quam et nunc sollicitudin ullamcorper quis eget ante. Mauris sed magna non enim placerat imperdiet sit amet id ante. Maecenas dignissim metus quis laoreet mollis. Praesent viverra suscipit erat non cursus. Aliquam tellus orci, aliquam sit amet sem eu, tempus viverra orci. Quisque cursus pharetra metus non tincidunt. Aenean placerat elementum lorem, sit amet placerat lorem cursus sit amet. Curabitur pulvinar augue tellus, sit amet faucibus nulla volutpat eu.</p>
        </div>
      </div>

      <Footer/>
    </>
    );
}

export default Home;