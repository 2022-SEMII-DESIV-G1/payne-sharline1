function cuenta(texto) {
    var mensaje = document.getElementById(texto).value;
    var cadena = mensaje.split("");
    var contador = {};

    cadena.forEach(function (valor) {
      if (contador[valor] === undefined) {
        contador[valor] = 1;
      } else {
        contador[valor] += 1;
      }
    });

    document.getElementById("Response").innerHTML = "<ul>";
    for (var clave in contador) {
      document.getElementById("Response").innerHTML +=
        "<li>" + clave + ":" + contador[clave] + "</li>";
    }
    document.getElementById("Response").innerHTML += "<ul>";
  }
  function borra(texto) {
    document.getElementById(texto).value = "";
    document.getElementById("Response").innerHTML = "";
}