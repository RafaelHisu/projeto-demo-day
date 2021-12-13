import { FaSearch, FaStore, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown"
import { useState } from 'react';

//Import das Imagens
import imageLogo from '../assets/image-logo-blue.png';
import textLogo from '../assets/text-logo-blue.png';
import defaultProfile from '../assets/default-profile.png';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const nome = "Lucas";

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left-side">
          <div className="dropBarHamburguer" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <FaBars />
            {dropdown && <Dropdown />}
          </div>
          <Link to="/" className="logo" >
            <img src={imageLogo} alt="Logo VOA" className="image-logo" />
            <img src={textLogo} alt="Logo VOA" className="text-logo" />
          </Link>
        </div>



        <form action="/pesquisa">
          <input type="text" name="busca" id="searchBar" placeholder="Buscar..." required />
          <button type="submit"><FaSearch /></button>
        </form>

        <div className="right-side">
          <Link to="/cadastroloja"><FaStore className="store-icon" /></Link>
          <Link to="/cadastro" class="profile">
            <img className="profile-picture" src={defaultProfile} alt="Foto de Perfil" />Faça login ou cadastre-se
          </Link>
        </div>
      </div>
    </div>
  )
}