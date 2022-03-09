function Media(){
    var n1 = parseFloat(document.getElementById("1").value);
    var n2 = parseFloat(document.getElementById("2").value);
    var n3 = parseFloat(document.getElementById("3").value);
    var n4 = parseFloat(document.getElementById("4").value);

    var resultado = parseFloat((n1+n2+n3+n4)/4);

    document.getElementById("mediaAprovacao").setAttribute("value", resultado);
    
    if (resultado >= 6) {
        document.getElementById("mediaAprovacao").style.background="#08E0D4"
        document.getElementById("mediaAprovacao").style.color="#FFF"
        alert("Parabéns! Você passou com nota " + resultado);
    } else {
        document.getElementById("mediaAprovacao").style.background="#E00863"
        document.getElementById("mediaAprovacao").style.color="#FFF"
        alert("Que pena você foi reprovado...")
    }

}

