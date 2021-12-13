import { Link } from "react-router-dom";
import rocketCadastro from '../assets/rocket-cadastro.png'

export default function Cadastro() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-form">
          <h1>Cadastre-se</h1>
          <p>Faça seu cadastro e venha voar com a gente!</p>
          <form>
            <div className="cadastro-top">
              <div>
                <label htmlFor="nome-cadastro">Nome</label><br />
                <input type="text" name="nome" id="nome-cadastro" required />
              </div>

              <div>
                <label htmlFor="sobrenome-cadastro">Sobrenome</label><br />
                <input type="text" name="sobrenome" id="sobrenome-cadastro" required />
              </div>

              <div>
                <label htmlFor="email-cadastro">E-mail</label><br />
                <input type="email" name="email" id="email-cadastro" required />
              </div>

              <div>
                <label htmlFor="cep-cadastro">CEP</label><br />
                <input type="text" name="cep" id="cep-cadastro" required />
              </div>

              <div>
                <label htmlFor="endereco-cadastro">Endereço</label><br />
                <input type="text" name="endereco" id="endereco-cadastro" required />
              </div>

              <div>
                <label htmlFor="senha-cadastro">Senha</label><br />
                <input type="password" name="senha" id="senha-cadastro" required />
              </div>
            </div>

            <div className="cadastro-privacidade">
              <input type="checkbox" name="privacidade-cadastro" id="privacidade-cadastro" required />
              <label htmlFor="privacidade-cadastro">Aceito as políticas de privacidade</label>
            </div>

            <div className="cadastro-bottom">
              <input type="submit" value="Cadastrar" />
              <p>Já tem uma conta? <Link to="/entrar">Entrar</Link></p>
            </div>
          </form>
        </div>

        <div className="cadastro-image">
          <img src={rocketCadastro} alt="Foguete" />
        </div>
      </div>
    </div>
  )
}