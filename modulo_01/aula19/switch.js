const diaDaSemana = prompt("Informe o dia da semana:");

let mensagem = "";

switch (diaDaSemana) {
  case "segunda":
    mensagem = "Hoje é segunda-feira. Dia de começar a semana!";
    break;
  case "terça":
    mensagem = "Hoje é terça-feira. Estamos no meio da semana.";
    break;
  case "quarta":
    mensagem = "Hoje é quarta-feira. Vamos em frente!";
    break;
  case "quinta":
    mensagem = "Hoje é quinta-feira. Já estamos perto do final da semana.";
    break;
  case "sexta":
    mensagem = "Hoje é sexta-feira. Dia de celebrar!";
    break;
  case "sábado":
    mensagem = "Hoje é sábado. Aproveite o fim de semana!";
    break;
  case "domingo":
    mensagem = "Hoje é domingo. Um ótimo dia para descansar.";
    break;
  default:
    mensagem = "Dia inválido. Por favor, informe um dia da semana válido.";
    break;
}

alert(mensagem);

/*Neste exemplo, o código solicita ao usuário para informar o dia da semana. Em seguida,
 a estrutura switch é usada para avaliar o valor da variável diaDaSemana. Dependendo do 
 valor fornecido, 
uma mensagem correspondente é atribuída à variável mensagem. Em seguida, essa mensagem é 
exibida usando o alert.

É importante lembrar de usar a palavra-chave break após cada caso para sair do bloco switch 
quando o caso correspondente for encontrado. Isso impede que a execução continue para os
 casos subsequentes.
O bloco default é usado para tratar situações em que nenhum dos casos anteriores é 
correspondente.

Você pode adicionar ou remover casos conforme necessário e personalizar as mensagens para 
atender às suas necessidades.*/