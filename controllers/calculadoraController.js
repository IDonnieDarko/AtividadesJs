exports.showForm = (req, res) => {
    res.render('index');
  };
  
  exports.calcular = (req, res) => {
    const { numA, numB, operacao } = req.body;
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = parseFloat(numA) + parseFloat(numB);
        break;
      case '-':
        resultado = parseFloat(numA) - parseFloat(numB);
        break;
      case '*':
        resultado = parseFloat(numA) * parseFloat(numB);
        break;
      case '/':
        if (parseFloat(numB) === 0) {
          resultado = 'Erro: Divisão por zero';
        } else {
          resultado = parseFloat(numA) / parseFloat(numB);
        }
        break;
      default:
        resultado = 'Operação inválida';
    }
  
    res.render('resultado', { resultado, numA, numB, operacao });
  };
  