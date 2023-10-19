const n1 = parseFloat(prompt("digite um número"));
const n2 = parseFloat(prompt("digite outro número"));

const soma = n1 + n2;
const subtração = n1 - n2;
const multiplicação = n1 * n2;
const divisão = n1 / n2;
const potenciação = n1 ** n2;

alert(
  "\no resultado da soma entre os dois numeros é igual: " +
    soma +
    "\no resultado da subtação entre os dois nummeros é igual: " +
    subtração +
    "\no resultado da multiplicação entre os dois numeros é igual: " +
    multiplicação +
    "\no resultado da divisão entre os dois numeros é igual: " +
    divisão +
    "\npotenciação: " +
    potenciação
);
