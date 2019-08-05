var botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function (event) {
  var local = document.querySelector(".local");
  var quantidade = document.querySelector(".quantidade");
  var preco = parseFloat(local.value * quantidade.value).toFixed(2);
  var nomeLocal = verificaLocal(local.options[local.selectedIndex].text);
  var alert = document.querySelector(".alert");
  if (local.value == 0) {
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe uma lanchonete válida.";
  }
  else if (quantidade.value == "" || quantidade.value < -1) {
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido.";
  }
  else {
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ " + preco + " de café no " + nomeLocal + " esse mês.";
  }
});

function verificaLocal(local) {
  if (local.indexOf('-') > - 1) {
    return local.substring(0, local.indexOf('-'));
  }
  else {
    return local;
  }
}
