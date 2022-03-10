function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value 
    var valorEmDollarNumerico = parseFloat(valor)

    var valorEmReal = valorEmDollarNumerico / 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em dollars é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}

function Converter2() {
  var valorElemento = document.getElementById("valor2")
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor)
  
  var valorEmEuro = valorEmEuroNumerico / 2
  var valorfixado = valorEmEuro.toFixed(2)

  var elementoConvertido = document.getElementById("valorConvertido2")
  var valorEuroConvertido = "O resultado em Euro é €" + valorEmEuro
  elementoConvertido.innerHTML = valorEuroConvertido
}
