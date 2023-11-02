const express = require('express');
const app = express();
const calculadoraRoutes = require('./routes/calculadoraRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', calculadoraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
