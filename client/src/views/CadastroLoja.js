import phoneCadastroLoja from '../assets/phone-cadastro-loja.png'

export default function CadastroLoja() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-form">
          <h1>Cadastre sua loja!</h1>
          <p>Aqui você começa os preparativos para o lançamento da sua loja</p>
          <form>
            <div className="cadastro-top">
              <div>
                <label htmlFor="nome-cadastro-loja">Nome da Loja</label><br />
                <input type="text" name="nome" id="nome-cadastro-loja" required />
              </div>

              <div>
                <label htmlFor="cnpj-cadastro-loja">CNPJ</label><br />
                <input type="number" name="cnpj" id="cnpj-cadastro-loja" placeholder="Apenas números" required />
              </div>

              <div>
                <label htmlFor="cep-cadastro-loja">CEP</label><br />
                <input type="number" name="cep" id="cep-cadastro-loja" placeholder="Apenas números" required />
              </div>

              <div>
                <label htmlFor="endereco-cadastro-loja">Endereço</label><br />
                <input type="text" name="endereco" id="endereco-cadastro-loja" required />
              </div>

              <div>
                <label htmlFor="estado-cadastro-loja">Estado</label><br />
                <input type="text" name="estado" id="estado-cadastro-loja" required />
              </div>

              <div>
                <label htmlFor="cidade-cadastro-loja">Cidade</label><br />
                <input type="text" name="cidade" id="cidade-cadastro-loja" required />
              </div>

              <div>
                <label htmlFor="contato-cadastro-loja">Contato</label><br />
                <input type="number" name="contato" id="contato-cadastro-loja" placeholder="Apenas números" required />
              </div>
            </div>

            <div className="cadastro-privacidade">
              <input type="checkbox" name="privacidade-cadastro" id="privacidade-cadastro" required />
              <label htmlFor="privacidade-cadastro">Aceito as políticas de privacidade</label>
            </div>

            <div className="cadastro-bottom">
              <input type="submit" value="Cadastrar" />
            </div>
          </form>
        </div>

        <div className="cadastro-image">
          <img src={phoneCadastroLoja} alt="Celular" width="90%" style={{ marginLeft: "25px" }} />
        </div>
      </div>
    </div>
  )
}