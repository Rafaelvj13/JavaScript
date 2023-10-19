/*## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro 
disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e 
remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa 
deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial 
e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
A opção de sair deve encerrar o programa.*/

let saldo = parseFloat(prompt("informe o saldo atual")); // Solicita ao usuário que informe o saldo atual e o converte em um número de ponto flutuante (float)

let opcao = ""; // Declara uma variável vazia para armazenar a opção escolhida pelo usuário

do {
  opcao = prompt(
    "\nSaldo disponível é de R$ " + saldo + // Exibe o saldo atual
    "\n1 Adicionar" +
    "\n2 Retirar" +
    "\n3 Sair "
  ); // Exibe um prompt com as opções disponíveis e armazena a escolha do usuário na variável 'opcao'

  switch (opcao) { // Início da estrutura switch-case para executar diferentes ações com base na opção escolhida pelo usuário
    case "1": // Se a opção for "1"
      saldo += parseFloat(prompt("quantia adicionada")); // Solicita ao usuário uma quantia a ser adicionada e a converte em um número de ponto flutuante (float), em seguida, adiciona ao saldo
      break;
    case "2": // Se a opção for "2"
      saldo -= parseFloat(prompt("quantia removida")); // Solicita ao usuário uma quantia a ser removida e a converte em um número de ponto flutuante (float), em seguida, subtrai do saldo
      break;
    case "3": // Se a opção for "3"
      alert("Saindo... "); // Exibe uma mensagem de alerta informando que o programa está saindo
      break;
    default: // Se a opção não corresponder a nenhum caso acima
      alert("opção inválida"); // Exibe uma mensagem de alerta informando que a opção é inválida
  }
} while (opcao !== "3"); // O loop continua enquanto a opção for diferente de "3", ou seja, o programa continuará em execução até que o usuário escolha a opção "3" para sair


