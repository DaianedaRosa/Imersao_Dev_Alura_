var daiane = { nome: "Daiane", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var savio = { nome: "Sávio", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

var resultadoDosPontos
calculaPontos(daiane);

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}
