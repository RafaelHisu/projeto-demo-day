import { useEffect } from "react";
import { useLocation } from "react-router";


export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return (
    <div className="index-page">

      <div className="products-container">
        <div className="wrapper">
          <h2>Perguntas Frequentes</h2>
          <br/>
          <b>Como cadastro minha loja?</b>
          <p>Para cadastrar sua loja no VOA, você necessita ter uma loja, dur, e clicar <a href="cadastroloja">aqui</a>.</p>

          <b>O que ganho me cadastrando no VOA?</b>
          <p> Haha, você consegue avaliar produtos, favoritar lojas e até receber novidades do VOA.</p>

          <b>Posso comprar produtos pelo VOA?</b>
          <p>Os usuários podem entrar em contato com o comerciante de um determinado produto para comprá-lo, mas o VOA não funciona como um "Mercado Livre", por exemplo, ele apenas serve de vitrine para conectar um cliente a um comerciante.</p>

          <b>O que significa VOA?</b>
          <p>Vitrine Online para Anunciantes</p>

          <b>COMO TIRA A LETRA GRANDE?</b>
          <p>PERGUNTA PARA A PATROA, CLICA <a href="https://wa.me/5511966935080">AQUI</a></p>
          
        </div>
        </div>
    </div >
  )
}