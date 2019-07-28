var botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function(event){
  var meioTransporte = document.querySelector(".meio-transporte");
  var qtdViagens = document.querySelector(".qtd-viagens");
  var preco = calculaPreco(meioTransporte, qtdViagens);
  var nomeTransporte = verificaTransporte(meioTransporte.value);
  var alert = document.querySelector(".alert");
  if(meioTransporte.value == 0){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe um meio de transporte válido";
  }
  else if(qtdViagens.value < 0){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe uma quantidade válida para as viagens.";
  }
  else{
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ "+preco+" de passagem de "+nomeTransporte+
    " esse mês.";
  }
});

function calculaPreco(meioTransporte, qtdViagens)
{
  if(document.getElementById("defaultCheck1").checked){
    return parseFloat((meioTransporte.value * qtdViagens.value)/2.0).toFixed(2);
  }
  else{
    return parseFloat(meioTransporte.value * qtdViagens.value).toFixed(2);
  }
}

function verificaTransporte(meioTransporte)
{
  if(meioTransporte == 3.75){
    return "ônibus";
  }
  else if(meioTransporte == 4.60){
    return "ônibus metropolitano";
  }
  else if(meioTransporte == 5){
    return "van";
  }
}
