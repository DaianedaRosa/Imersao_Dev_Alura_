var carta1 = {
    nome: "Naja",
    atributos: {
      comprimento: 1.8,
      peso: 6,
      periculosidade: 7,
      agressividade: 8
    }
  };
  
  var carta2 = {
    nome: "Cascavel",
    atributos: {
        comprimento: 1.9,
        peso: 5,
        periculosidade: 8,
        agressividade: 9
    }
  };
  
  var carta3 = {
    nome: "Mamba-Negra",
    atributos: {
        comprimento: 2.2,
        peso: 6,
        periculosidade: 10,
        agressividade: 9
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  // SORTEIA A CARTA //
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    //if executa apenas uma vez, enquanto o while executa varias vezes até conseguir o resultado//
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
  }
  
  // FAZ APARECER OS BOTOES DOS ATRIBUTOS NA TELA //
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    // for = para cada; while = enquanto; if = se; else = outro; else if = outro se; //
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" + atributo + "'checked>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML =
        "Você perdeu, o atributo " + atributoSelecionado + " da máquina era " + valorCartaMaquina + "!";
    } else {
      elementoResultado.innerHTML = "Empate!";
    }
  }