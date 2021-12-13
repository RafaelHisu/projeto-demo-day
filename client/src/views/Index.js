import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import ProductList from "../components/ProductList";

import bannerConvite from '../assets/bannerDoComerciante.png'
import banner from '../assets/banner.png'

import { produto } from "../data/produto";
import { Carousel } from "react-bootstrap";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  let destaques = produto.filter(p => p.destaque).reverse();
  let novidades = produto.sort((a, b) => a.id - b.id);
  let alimentacao = produto.filter(p => p.categoria === 10);
  let tecnologia = produto.filter(p => p.categoria === 4);

  return (
    <div className="index-page">

      <div className="intro-container">
        <Carousel indicators={false} className="intro-banner">
          <Carousel.Item>
            <img src={banner} alt="Banner com ofertas" />
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/cadastroloja"><img src={bannerConvite} alt="Banner de convite para divulgar seu negócio" /></ Link>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="products-container">
        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={destaques} />
        </div>

        <div className="wrapper">
          <h2>Novidades</h2>
          <ProductList products={novidades} />
        </div>

        <div className="wrapper">
          <h2>Alimentação</h2>
          <ProductList products={alimentacao} />
        </div>

        <div className="wrapper">
          <h2>Tecnologia</h2>
          <ProductList products={tecnologia} />
        </div>
      </div>

    </div >
  )
}