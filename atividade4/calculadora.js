// util/calculadora.js

function somar(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  
  function subtrair(a, b) {
    return parseFloat(a) - parseFloat(b);
  }
  
  function multiplicar(a, b) {
    return parseFloat(a) * parseFloat(b);
  }
  
  function dividir(a, b) {
    if (parseFloat(b) === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return parseFloat(a) / parseFloat(b);
  }
  
  module.exports = { somar, subtrair, multiplicar, dividir };
  