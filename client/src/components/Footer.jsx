import { Link } from "react-router-dom"
import imageLogo from "../assets/image-logo-blue.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div className="categories">
          <h2>Categorias</h2>
          <ul>
            <li><Link to='#'>Alimentação</Link></li>
            <li><Link to='#'>Construção</Link></li>
            <li><Link to='#'>Cosméticos</Link></li>
            <li><Link to='#'>Eletrônicos</Link></li>
            <li><Link to='#'>Vestuário</Link></li>
            <li><Link to='#'>Farmácia</Link></li>
            <li><Link to='#'>Mecânica</Link></li>
            <li><Link to='#'>Papelarias</Link></li>
            <li><Link to='#'>Pet Shop</Link></li>
          </ul>
        </div>
        <div className="help">
          <h2>Ajuda</h2>
          <ul>
            <li><Link to='#'>SAC</Link></li>
            <li><Link to='/Faq'>FAQ</Link></li>
            <li><Link to='#'>Política de Privacidade</Link></li>
            <li><Link to='#'>Termos e Condições de Uso</Link></li>
          </ul>
        </div>
        <div className="about">
          <h2>VOA</h2>
          <ul>
            <li><Link to='/Sobre'>Quem somos?</Link></li>
            <li><Link to='#'>Abra sua loja</Link></li>
            <li><Link to='#'>Produtos mais buscados</Link></li>
            <li><Link to='#'>Trabalhe conosco</Link></li>
          </ul>
        </div>
        <div className="contact">
          <img src={imageLogo} alt="Logo do VOA" />
          <h2>(11)9 4002-8922</h2>
        </div>
      </div>
    </div>
  )
}