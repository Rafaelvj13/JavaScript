let velocidade = 0 // Inicializa a variável 'velocidade' com o valor 0

do {
  alert("a velocidade do veículo é " + velocidade + "km/h") // Exibe um alerta com a velocidade atual do veículo em km/h
  velocidade -= 20 // Subtrai 20 da velocidade atual do veículo
} while (velocidade > 0) // Repete o bloco de código enquanto a velocidade do veículo for maior que 0

alert("velocidade final: " + velocidade + "km/h") // Exibe um alerta com a velocidade final do veículo em km/h

//O laço de repetição do-while é usado para executar o bloco de código pelo menos uma vez e 
//repeti-lo enquanto a condição velocidade > 0 for verdadeira.