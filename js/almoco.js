var botaoCalcular = document.querySelector(".calcular");
var restaurante = document.querySelector(".restaurante");
var tipoRestaurante; // 1 = por peso; 2 = por unidade

restaurante.addEventListener("change", function (event) {
    var nomeRestaurante = restaurante.options[restaurante.selectedIndex].text;

    if (nomeRestaurante.indexOf('por peso') > -1) {
        tipoRestaurante = 1;
        document.getElementById("input-quantidade").hidden = true;
        document.getElementById("input-peso").hidden = false;
    }
    else {
        tipoRestaurante = 2;
        document.getElementById("input-peso").hidden = true;
        document.getElementById("input-quantidade").hidden = false;
    }
});

botaoCalcular.addEventListener("click", function (event) {
    nomeRestaurante = verificaRestaurante(restaurante.options[restaurante.selectedIndex].text);
    var alert = document.querySelector(".alert");

    if (tipoRestaurante == 1) {
        var quantidade = document.querySelector(".peso");
        var preco = parseFloat(restaurante.value * (quantidade.value/1000)).toFixed(2);
        if(nomeRestaurante.indexOf("CEDU") > -1 && preco > 14.00) preco = 14.00.toFixed(2);
    }
    else {
        var quantidade = document.querySelector(".quantidade");
        var preco = parseFloat(restaurante.value * quantidade.value).toFixed(2);
    }

    if (restaurante.value == 0) {
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        document.getElementById("paragrafo-alert").innerHTML = "Informe um restaurante válido.";
    }
    else if (quantidade.value == "" || quantidade.value < 0) {
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        document.getElementById("paragrafo-alert").innerHTML = "Informe uma quantidade válida.";
    }
    else {
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ " + preco + " de almoço no " + nomeRestaurante + ".";
    }
});

function verificaRestaurante(restaurante) {
    if (restaurante.indexOf(' -') > - 1) {
        return restaurante.substring(0, restaurante.indexOf(' -'));
    }
    else {
        return restaurante;
    }
}
