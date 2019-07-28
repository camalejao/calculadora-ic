var botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function(event){
  var restaurante = document.querySelector(".restaurante");
  var quantidade = document.querySelector(".quantidade");
  var preco = parseFloat(restaurante.value * quantidade.value).toFixed(2);
  var nomeRestaurante = verificaRestaurante(restaurante.value);
  var alert = document.querySelector(".alert");
  if(restaurante.value == 0){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe um restaurante válido.";
  }
  else if(quantidade.value == "" || quantidade.value < 0){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe uma quantidade válida.";
  }
  else{
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ "+preco+" de almoço no "+nomeRestaurante+".";
  }
});

function verificaRestaurante(restaurante)
{
  if(restaurante == 3)
  {
    return "Restaurante Universitário";
  }
  else if(restaurante == 7)
  {
    return "BIRA";
  }
  else if(restaurante ){
    return "CEDU";
  }
}
