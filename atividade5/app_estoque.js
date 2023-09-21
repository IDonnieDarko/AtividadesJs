const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/estoque', { useNewUrlParser: true, useUnifiedTopology: true });


const estoqueSchema = new mongoose.Schema({
  id: String,
  nome: String,
  qtd: Number
});

const Estoque = mongoose.model('Estoque', estoqueSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/api/estoque/cadastrar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;

  const novoItem = new Estoque({ id, nome, qtd });

  novoItem.save((err) => {
    if (err) {
      res.status(500).send('Erro ao cadastrar o item no estoque.');
    } else {
      res.status(200).send('Item cadastrado com sucesso.');
    }
  });
});


app.get('/api/estoque/listar', (req, res) => {
  Estoque.find({}, (err, itens) => {
    if (err) {
      res.status(500).send('Erro ao listar os itens do estoque.');
    } else {
      res.status(200).json(itens);
    }
  });
});


app.put('/api/estoque/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;

  Estoque.findOneAndUpdate({ id }, { qtd }, (err, item) => {
    if (err) {
      res.status(500).send('Erro ao editar o item no estoque.');
    } else {
      res.status(200).send('Item editado com sucesso.');
    }
  });
});


app.delete('/api/estoque/remover/:id', (req, res) => {
  const { id } = req.params;

  Estoque.findOneAndDelete({ id }, (err) => {
    if (err) {
      res.status(500).send('Erro ao remover o item do estoque.');
    } else {
      res.status(200).send('Item removido com sucesso.');
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
