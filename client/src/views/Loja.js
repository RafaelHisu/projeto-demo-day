import axios from 'axios';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { FaRegEnvelope, FaBookmark } from 'react-icons/fa'

import { loja } from '../data/loja';

import bannerLoja from '../assets/bannerLojaExemplo.png'
import ProductList from '../components/ProductList';

export default function Loja() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  // Pegar informações da loja
  const id = Number(useLocation().search.split('=')[1])
  const infoLoja = loja.find(l => l.id === id) ? loja.find(l => l.id === id) : window.location.href = "/notfound";

  const destaques = infoLoja.produtos.filter(p => p.destaque);

  // Pegar endereço através do CEP
  const [endereco, setEndereco] = useState();

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${infoLoja.cep}/json/`)
      .then((response) => setEndereco(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro" + err);
      });
  }, []);

  const [favoritado, setFavoritado] = useState(false);

  return (
    <div className="loja-page">
      <div className="loja-profile-box">
        <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
        <div className="loja-profile-info">
          <div><h1>{infoLoja.nome}</h1><FaBookmark className={favoritado ? "favoritado" : ""} onClick={() => setFavoritado(!favoritado)} /></div>
          <b></b><br />
          <span><b>{infoLoja.seguidores}</b> {infoLoja.seguidores == 1 ? "Seguidor" : "Seguidores"}</span>
        </div>
        <div className="loja-profile-endereco">
          <p>{endereco ? endereco.logradouro : "..."}</p>
          <p>Nº{infoLoja.numero || "..."}</p>
          <p>{endereco ? endereco.bairro : "..."}</p>
          <p>{endereco ? endereco.localidade : "..."} - {endereco ? endereco.uf : "..."}</p>
          <a href={`https://wa.me/55${infoLoja.contato}`} target="_blank"><FaRegEnvelope /> Contato</a>
        </div>
      </div>


      <div className="loja-products-box">
        <div>
          <img src={bannerLoja} alt="Capa da loja" />
        </div>

        <div>
          <h2>Destaques da semana</h2>
          <ProductList products={destaques} />
        </div>

        <div>
          <h2>Novos Produtos</h2>
          <ProductList products={infoLoja.produtos.sort((a, b) => a - b).reverse()} />
        </div>
      </div>
    </div >
  )
}