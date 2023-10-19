const primeiroNome = prompt("digite seu primeiro nome:");
const sobrenome = prompt("digite seu sobrenome:");
const campoDeEstudo = prompt("qual é o campo de estudo do recruta");
const anoNascimento = prompt("ano de nascimento");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nnome do recruta: " +
    primeiroNome +
    "" +
    sobrenome +
    "\ncampo de estudo " +
    campoDeEstudo +
    "\nidade " +
    (2023 - anoNascimento)
);
