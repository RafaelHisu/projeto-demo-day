import { useEffect } from "react";
import { useLocation } from "react-router";

import { integrantes } from "../data/integrantes";

import IntegrantesList from "../components/IntegrantesList";



export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return (
    <div className="index-page">

      <div className="products-container">
        <div className="wrapper">
          <h2>Lema</h2>
          <p> Preparem-se para comprar! </p>
          <p> Comprar em dobro! </p>    
          <p> Para proteger os comerciantes da exclusão! </p>   
          <p> Para unir os comerciantes da nossa região! </p>    
          <p> Pra relacionar comerciante com comprador! </p>   
          <p> Pra estender o seu lucro as estrelas! </p>    
          <p> Apresentamos... </p> 
          <p> Equipe rocket negociando na velocidade da luz! </p>    
          <p> Venha agora </p>  
          <p> E prepare-se para comprar, comprar! </p>   
          <p> Uau é isso aí! </p>   
           
        </div>

        <div className="wrapper">
          <h2>Nossa Equipe</h2>
          <IntegrantesList integrantes={integrantes} />
        </div>
        </div>
    </div >
  )
}