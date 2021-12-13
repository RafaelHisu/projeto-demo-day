import { Link } from "react-router-dom";
import rocketLogin from '../assets/rocket-login.png'

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <p>Bem vindo de volta ao nosso foguete!</p>
          <form>
            <div className="cadastro-top">
              <div>
                <label htmlFor="email-login">E-mail</label><br />
                <input type="email" name="email" id="email-login" required />
              </div>

              <div>
                <label htmlFor="senha-login">Senha</label><br />
                <input type="password" name="senha" id="senha-login" required />
              </div>
            </div>

            <div className="cadastro-privacidade">
              <input type="checkbox" name="privacidade-cadastro" id="privacidade-cadastro" />
              <label htmlFor="privacidade-cadastro">Lembrar de mim</label>
            </div>

            <div className="cadastro-bottom">
              <input type="submit" value="Entrar" />
              <Link to="#">Esqueci minha senha</Link>
              <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se!</Link></p>
            </div>
          </form>
        </div>

        <div className="cadastro-image">
          <img src={rocketLogin} alt="Foguete" />
        </div>
      </div>
    </div>
  )
}