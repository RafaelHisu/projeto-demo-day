import { useEffect } from "react";
import { useLocation } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";
import queryString from "query-string"

import LojaItem from "../components/LojaItem";
import ProductList from "../components/ProductList";

import { loja } from "../data/loja";
import { produto } from "../data/produto";
import { categoria } from "../data/categoria"

export default function Pesquisa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  const { search } = useLocation();
  const { busca } = queryString.parse(search)
  console.log(busca)


  const resultadoLojas = [];
  const resultadoProdutos = [];

  loja.forEach(l => {
    if (l.nome.toLowerCase().includes(busca.toLowerCase())) {
      resultadoLojas.push(l);
    }
  });

  produto.forEach(p => {
    let produtoCategoria = categoria.find(c => c.id === p.categoria).nome;
    if (p.nome.toLowerCase().includes(busca.toLowerCase())) {
      resultadoProdutos.push(p);
    } else if (produtoCategoria.toLowerCase().includes(busca.toLowerCase())) {
      resultadoProdutos.push(p);
    }
  });



  return (
    <div className="pesquisa-page">
      <div className="pesquisa-box">
        <h1 className="pesquisa-title">Resultados para "{busca}"</h1>
        {resultadoLojas.length > 0 ?
          <div>
            <h3 className="pesquisa-subtitle">Lojas</h3>
            <ScrollContainer className="pesquisa-lojas">
              {resultadoLojas.map(l => {
                return <LojaItem key={l.id} id={l.id} image={l.foto_loja} nome={l.nome} />
              })}
            </ScrollContainer>
          </div> : ""}

        {resultadoProdutos.length > 0 ?
          <div>
            <h3 className="pesquisa-subtitle">Produtos</h3>
            <ProductList products={resultadoProdutos} />
          </div>
          : ""}

        {resultadoProdutos.length == 0 && resultadoLojas.length == 0 ? "Sem resultados para essa pesquisa" : ""}
      </div>
    </div>
  )
}