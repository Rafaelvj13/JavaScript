// Solicita o nome do veículo 1 ao usuário
const veiculo1 = prompt("informe o nome do primeiro veículo ");

// Solicita a velocidade do veículo 1 ao usuário e converte para um número de ponto flutuante (float)
const velocidade1 = parseFloat(prompt("informe a velocidade do primeiro veículo "));

// Solicita o nome do veículo 2 ao usuário
const veiculo2 = prompt("informe o nome do segundo veículo");

// Solicita a velocidade do veículo 2 ao usuário e converte para um número de ponto flutuante (float)
const velocidade2 = parseFloat(prompt("informe a velocidade do segundo veículo"));

// Compara as velocidades dos veículos
if (velocidade1 > velocidade2) {
  // Se a velocidade do veículo 1 for maior que a do veículo 2, exibe uma mensagem indicando que o veículo 1 é mais rápido
  alert(veiculo1 + " é mais rápido do que o " + veiculo2);
} else if (velocidade1 < velocidade2) {
  // Se a velocidade do veículo 1 for menor que a do veículo 2, exibe uma mensagem indicando que o veículo 2 é mais rápido
  alert(veiculo2 + " é mais rápido que o " + veiculo1);
} else {
  // Se as velocidades forem iguais, exibe uma mensagem indicando que ambos os veículos possuem a mesma velocidade
  alert("o " + veiculo1 + " e o " + veiculo2 + " possuem a mesma velocidade");
}
