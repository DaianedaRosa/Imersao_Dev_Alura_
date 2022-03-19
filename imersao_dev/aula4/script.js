var listaFilmes = ["https://br.web.img2.acsta.net/pictures/21/12/06/10/52/1598963.jpg", "https://advancetitan.com/wp-content/uploads/2022/02/Euphoria.jpeg", "https://assets.pikiran-rakyat.com/crop/138x204:1244x1842/x/photo/2021/03/27/2686413634.jpg", "https://static.wikia.nocookie.net/dccomicsextendeduniverse/images/c/cb/%27Wonder_Woman%27_2017.jpg/revision/latest?cb=20191113161800&path-prefix=pt-br"]

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img class='filmes' src=" + listaFilmes[indice] + ">");
}
  
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")){
    var elementoFilmes = "<img src=" + filmeFavorito + ">"
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmes;
  } else {
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = ""
} 
 
  

  


  