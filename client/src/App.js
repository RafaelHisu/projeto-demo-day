import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./views/Index";
import CadastroLoja from './views/CadastroLoja'
import Loja from './views/Loja'
import Pesquisa from './views/Pesquisa'
import Produto from './views/Produto'
import Cadastro from "./views/Cadastro";
import Sobre from "./views/Sobre";
import Sidebar from "./views/Sidebar";
import Faq from "./views/Faq";

import './styles/App.scss'
import Login from "./views/Login";
import EmptyState from "./views/EmptyState";

export default function App() {
  return (
    <Router>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/cadastroloja" exact element={<CadastroLoja />} />
          <Route path="/pesquisa" exact element={<Pesquisa />} />
          <Route path="/loja" exact element={<Loja />} />
          <Route path="/produto" exact element={<Produto />} />
          <Route path="/cadastro" exact element={<Cadastro />} />
          <Route path="/entrar" exact element={<Login />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/sobre" exact element={<Sobre />} />
          <Route path="/sidebar" exact element={<Sidebar />} />
          <Route path='*' exact element={<EmptyState />} />
        </Routes>
      </div>

      <Footer />
    </Router >
  );
};