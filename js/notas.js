var botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function(event){
  var ab1 = document.querySelector(".ab1");
  var ab2 = document.querySelector(".ab2");
  var reav = document.querySelector(".reav");
  var alert = document.querySelector(".alert");
  var media = calculaNota(ab1.value, ab2.value, reav.value);
  if(ab1.value < 0 || ab1.value == ""){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido para a AB1.";
  }
  else if(ab2.value < 0 || ab2.value == ""){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido para a AB2.";
  }
  else if(media > 7){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    document.getElementById("paragrafo-alert").innerHTML = "Você não precisa fazer a prova final!";
  }
  else if (media < 5.0){
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    document.getElementById("paragrafo-alert").innerHTML = "Você não poderá fazer a prova final, pois a média é menor que 5.00!"
  }
  else{
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    var notaFinal = ((55 - parseFloat(6 * parseFloat(media)))/4.0).toFixed(2);
    document.getElementById("paragrafo-alert").innerHTML = "Você precisará tirar, no mínimo, "+notaFinal+" na prova final!"
  }
});

function calculaNota(ab1, ab2, reav){
  if(parseFloat(ab1) > parseFloat(ab2)){
    if(parseFloat(reav) > parseFloat(ab2)){
      ab2 = parseFloat(reav);
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
    else{
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
  }
  else if(parseFloat(ab2) > parseFloat(ab1)){
    if(parseFloat(reav) > parseFloat(ab1)){
      ab1 = parseFloat(reav);
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
    else{
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
  }
  else{
    if(parseFloat(reav) > parseFloat(ab1)){
      ab1 = parseFloat(reav);
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
    else{
      return (parseFloat(ab1) + parseFloat(ab2))/2.0;
    }
  }
}
