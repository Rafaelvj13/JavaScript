/*## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não 
precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. 
Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela 
indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com 
as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. 
Ao escolhe-la uma mensagem dizendo 
que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/



let opcao= ""

do{
  opcao = prompt(
    "Seja bem vindo, escolha uma das opções abaixo:\n" +
    "\n1. opção um " +
    "\n2. opção dois " +
    "\n3. opção três " +
    "\n4. opção quatro " +
    "\n5. encerrar "    
  )

  switch(opcao){
    case "1":
      alert("Sua opção escolhida foi a de n° 1")
      break;
    case "2":
      alert("Sua opção escolhida foi a de n° 2")
      break;
    case "3":
      alert("Sua opção escolhida foi a de n° 3")
      break;
    case "4":
      alert("Sua opção escolhida foi a de n° 4")

    case "5":
      alert("você escolheu encerrar a operação")
      alert("encerrando...")
      break;
    default: 
      alert("escolha uma opção válida")      
  }
} while(opcao !== "5");


