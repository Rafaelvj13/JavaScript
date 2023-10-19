const medida = parseFloat(prompt("insira uma medida em metros:"))

const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
  "\n1. milimetro (mm)" +
  "\n2. centimetro (cm)" +
  "\n3. decímetro (dm)" +
  "\n4. decâmetro(dma)" +
  "\n5. hectômetro (hm)" +
  "\n6. quilometro (km)" 
)

switch (unidade){
  case "1":
  alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
  break
  case "2":
  alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
  break
  case "3":
  alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
  break
  case "4":
  alert("Resultado: " + medida + "m = " + medida / 0,1 + "dma")
  break
  case "5":
  alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
  break
  case "6":
  alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
  break
  default:
  alert("Opção invalida")
}

