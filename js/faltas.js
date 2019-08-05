var botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function (event) {
    var nomeDisciplina = document.querySelector(".nome-disciplina");
    var cargaHorariaTotal = document.querySelector(".carga-horaria-total");
    var cargaHorariaDiaria = document.querySelector(".carga-horaria-diaria");
    var alert = document.querySelector(".alert");
    var numeroFaltas = calculaNumeroFaltas(cargaHorariaTotal, cargaHorariaDiaria);
    var verificaDados = verificaDadosInformados(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria);
    if (verificaDados) {
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        document.getElementById("paragrafo-alert").innerHTML = "Disciplina: " + nomeDisciplina.value +
            ". Você só poderá faltar " + numeroFaltas + " vezes.";
    }
    else {
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        verificaErro(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria);
    }
});

function calculaNumeroFaltas(cargaHorariaTotal, cargaHorariaDiaria) {
    var cht = parseInt(cargaHorariaTotal.value);
    var chd = parseInt(cargaHorariaDiaria.value);
    var numAulas = parseInt(cht / chd);
    return parseInt(numAulas * 0.3);
}

function verificaDadosInformados(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria) {
    if ((nomeDisciplina.value != "") && (cargaHorariaTotal.value > 0) && (cargaHorariaDiaria.value > 0)) {
        return 1;
    }
    else {
        return 0;
    }
}

function verificaErro(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria) {
    if (nomeDisciplina.value == "") {
        document.getElementById("paragrafo-alert").innerHTML = "Nome da disciplina inválido!";
    }
    else if (cargaHorariaTotal.value <= 0) {
        document.getElementById("paragrafo-alert").innerHTML = "Carga Horária Total inválida!";
    }
    else if (cargaHorariaDiaria.value <= 0) {
        document.getElementById("paragrafo-alert").innerHTML = "Carga Horária Diária inválida!";
    }
}
