// Solicita o nome do atacante ao usuário
const atacante = prompt("Insira o nome do atacante");

// Solicita o poder de ataque do atacante ao usuário e converte para um número de ponto flutuante (float)
const poderAtacante = parseFloat(prompt("Insira o poder de ataque"));

// Solicita o nome do defensor ao usuário
const defensor = prompt("Insira o nome do defensor");

// Solicita os pontos de vida do defensor ao usuário e converte para um número de ponto flutuante (float)
let pontosDeVida = parseFloat(prompt("Insira os pontos de vida do defensor"));

// Solicita o poder de defesa do defensor ao usuário e converte para um número de ponto flutuante (float)
const poderDeDefesa = parseFloat(prompt("Insira o poder de defesa"));

// Solicita ao usuário se o defensor possui escudo (sim/não)
const escudo = prompt("Ele possui escudo? (sim/não)");

let danoCausado = 0;

// Verifica se o poder de ataque é maior que o poder de defesa e se o defensor não possui escudo
if (poderAtacante > poderDeDefesa && escudo === "não") {
  danoCausado = poderAtacante - poderDeDefesa;
} else if (poderAtacante > poderDeDefesa && escudo === "sim") {
  // Caso o defensor possua escudo, o dano causado é reduzido pela metade
  danoCausado = (poderAtacante - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

// Exibe uma mensagem informando o dano causado pelo atacante ao defensor
alert(atacante + " causou " + danoCausado + " pontos de vida no defensor " + defensor)

// Exibe informações sobre o atacante e o defensor
alert(atacante + "\npossui poder de ataque de: " + poderAtacante + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida + 
  "\nPoder de defesa: " + poderDeDefesa + "\npossui escudo: " + escudo);




/*Escreva um programa que permita inserir o nome e o poder de ataque de um 
personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de 
outro personagem
 e se ele possui um escudo, e então calcule a quantidade de dano causado 
 baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir 
um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, 
o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de 
pontos de vida do personagem defensor e exibir na tela a quantidade de dano 
e as informações atualizadas de ambos os personagens.*/
