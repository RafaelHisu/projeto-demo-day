const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = Express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "demoday",
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.json())
app.use(cors());

app.get("/api/getProducts", (req, res) => {
  sqlSelect = "SELECT * FROM produto";

  db.query(sqlSelect, (err, result) => {
    res.send(result)
  });
})

app.get("/api/getProduct", (req, res) => {
  sqlSelect = `SELECT * FROM produto WHERE id = ${req.body.id}`;

  db.query(sqlSelect, (err, result) => {
    console.log(result)
    res.send(result)
  });
})

app.get("/api/getLoja", (req, res) => {
  sqlSelect = `SELECT * FROM loja WHERE id = ${req.body.id}`;

  db.query(sqlSelect, (err, result) => {
    console.log(result)
    res.send(result)
  });
})

app.post("/api/addLoja", (req, res) => {
  let info = req.body;

  sqlInsert = "INSERT INTO loja(id_usuario, foto_loja, cnpj, nome, cep, endereco, numero, estado, cidade, bairro, contato) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

  try {
    db.query(sqlInsert, [info.id_usuario, info.foto_loja, info.cnpj, info.nome, info.cep, info.endereco, info.numero, info.estado, info.cidade, info.bairro, info.contato], (err, result) => {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        console.log(result)
        res.send(result)
      }
    });
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})




app.get("/api/getAllUsuarios", (req, res) => {
  sqlSelect = `SELECT * FROM usuario`;

  db.query(sqlSelect, (err, result) => {
    console.log(result)
    res.send(result)
  });
})

app.post("/api/addUsuario", (req, res) => {
  let info = req.body;

  sqlInsert = "INSERT INTO usuario(nome, genero, email, senha, celular, cep, endereco, numero, estado, cidade, bairro) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

  try {
    db.query(sqlInsert, [info.nome, info.genero, info.email, info.senha, info.celular, info.cep, info.endereco, info.numero, info.estado, info.cidade, info.bairro], (err, result) => {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        console.log(result)
        res.send(result)
      }
    });
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.listen(3301, () => {
  console.log("Servidor rodando na porta 3301")
})