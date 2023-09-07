// index.js
const express = require("express");
const app = express();
const calculadora = require("./util/calculadora");

app.get("/somar/:a/:b", (req, res) => {
  const resultado = calculadora.somar(req.params.a, req.params.b);
  res.send(`Resultado: ${resultado}`);
});

app.get("/subtrair/:a/:b", (req, res) => {
  const resultado = calculadora.subtrair(req.params.a, req.params.b);
  res.send(`Resultado: ${resultado}`);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const resultado = calculadora.multiplicar(req.params.a, req.params.b);
  res.send(`Resultado: ${resultado}`);
});

app.get("/dividir/:a/:b", (req, res) => {
  try {
    const resultado = calculadora.dividir(req.params.a, req.params.b);
    res.send(`Resultado: ${resultado}`);
  } catch (error) {
    res.status(400).send(`Erro: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
