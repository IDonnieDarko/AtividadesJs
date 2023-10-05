const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que você preferir

// Configurar o uso do Bootstrap 5
app.use(express.static('node_modules/bootstrap/dist'));

// Configurar o uso do EJS para renderizar as páginas HTML
app.set('view engine', 'ejs');

// Rota para a página inicial com o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para receber os dados do formulário via POST e renderizar a página de dados
app.post('/dados', (req, res) => {
  // Aqui, você pode processar os dados do formulário e passá-los para a página dados.ejs
  const formData = req.body;
  res.render('dados', { formData });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
