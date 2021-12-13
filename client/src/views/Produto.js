import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string"
import { FaShoppingBag, FaRegEnvelope, FaStar } from "react-icons/fa"

import { produto } from "../data/produto";
import { usuario } from "../data/usuario";
import { loja } from "../data/loja";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import RatingBox from "../components/RatingBox";

export default function Produto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  // Pegar informações do produto
  const { search } = useLocation();
  const id = Number(queryString.parse(search).id);
  const infoProduto = produto.find(p => p.id === id) ? produto.find(p => p.id === id) : window.location.href = "/notfound";
  const infoLoja = loja.find(l => l.id === infoProduto.id_loja);

  let produtosAd = []
  let counter = 0;

  for (let p of infoLoja.produtos) {
    if (counter < 2) {
      if (p.id != infoProduto.id) {
        counter++
        produtosAd.push(p)
      }
    }
  }

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="product-page">

      <div className="product-store-box">
        <div className="product-store-info">
          <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
          <div>
            <b>{infoLoja.nome}</b>
            <p>{(infoLoja.seguidores).toLocaleString()} Seguidores</p>
          </div>
        </div>
        <div className="product-store-buttons">
          <Link to={`/loja?id=${infoLoja.id}`}><FaShoppingBag /> Ver loja</Link>
          <a href={`https://wa.me/55${infoLoja.contato}`} target="_blank"><FaRegEnvelope /> Contato</a>
        </div>
      </div>


      <div className="product-info-box">
        <div className="product-info-images">
          <img className="product-info-main-image" src={infoProduto.foto_produto} alt={infoProduto.nome} />
          <div className="product-info-other-images">
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
          </div>
        </div>

        <div className="product-info-content">
          <h1>{infoProduto.nome}</h1>
          <div>
            {infoProduto.avaliacoes.length} Avaliações
          </div>
          <p>{infoProduto.descricao}</p>
          <p className="product-info-distance"><b>Distância:</b> <span>3km</span> de você!</p>

          <div className="product-info-color-price">
            <div className="product-info-color">
            </div>

            <div className="product-info-price">
              <h2>R$ {infoProduto.preco.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
            </div>
          </div>

          <a href={`https://wa.me/55${infoLoja.contato}?text=${window.location.href}`} target="_blank">Quero esse produto</a>
        </div>
      </div>


      <div className="product-description-wrapper">
        <div className="product-description-box">
          <h2>Descrição do produto</h2>
          <ul>
            {infoProduto.caracteristicas.map(c => {
              return (
                <li>{c}</li>
              )
            })}
          </ul>
        </div>
        <div className="product-ad-box">
          <h4>Mais de {infoLoja.nome}:</h4>
          {produtosAd.length > 1 ? produtosAd.map(p => {
            return (
              <ProductItem
                key={p.id}
                id={p.id}
                image={p.foto_produto}
                title={p.nome}
                description={p.descricao}
                price={p.preco} />
            )
          }) : "Não há mais produtos"}
          <Link to={`/loja?id=${infoLoja.id}`} className="product-ad-button">Ver mais</Link>
        </div>
      </div>


      <div className="product-rating-box">
        <h2>Principais avaliações</h2>
        {infoProduto.avaliacoes.length > 0 ? infoProduto.avaliacoes.map(a => {
          const user = usuario.find(u => u.id == a.id_usuario);
          return (
            <RatingBox
              nome={user.nome}
              img={user.foto_usuario}
              nota={a.avaliacao_produto}
              comentario={a.comentario_produto}
            />
          )
        }) : "Esse produto não tem avaliações"}
        <form className="product-rating-form">
          <div>
            <h3>Avaliar</h3>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    required
                    onClick={() => setRating(ratingValue)
                    }
                  />
                  <FaStar
                    className={`product-rating-star ${ratingValue <= (hover || rating) ? "yellow-star" : "gray-star"}`}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              )
            })}
          </div>
          <textarea name="avaliacao" id="avaliacao" rows="5" maxLength="280" placeholder="Digite sua avaliação aqui..." required></textarea>
          <button type="text">Enviar</button>
        </form>

      </div>
    </div>
  )
}