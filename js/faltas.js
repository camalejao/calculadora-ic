// atribuindo o botão da página a uma variável
var botaoCalcular = document.querySelector(".calcular");

/* cria um event listener para executar a função sempre
que o botão for clicado */
botaoCalcular.addEventListener("click", function (event) {
    // lendo valores do documento html e atribuindo a variáveis
    var nomeDisciplina = document.querySelector(".nome-disciplina");
    var cargaHorariaTotal = document.querySelector(".carga-horaria-total");
    var cargaHorariaDiaria = document.querySelector(".carga-horaria-diaria");

    // atribuindo o componente de saída da página a uma variável
    var alert = document.querySelector(".alert");

    // armazenando o resultado da funcão que calcula o número de faltas que o aluno poderá ter sem ser reprovado
    var numeroFaltas = calculaNumeroFaltas(cargaHorariaTotal);

    // armazenando o resultado da funcão que calcula quantos dias o aluno poderá faltar
    var numeroDias = calculaNumeroDias(numeroFaltas, cargaHorariaDiaria);

    // armazenando resultado da função que verifica os dados recebidos na entrada
    var verificaDados = verificaDadosInformados(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria);

    if (verificaDados) {
        // caso os dados sejam válidos
        // alterando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        // informando resultado dos cálculos
        let msg = "Disciplina: " + nomeDisciplina.value + ".";
        msg += " Você só poderá ter " + numeroFaltas + " faltas no boletim.";
        msg += " Portanto, você poderá faltar em no máximo " + numeroDias + " dias.";
        document.getElementById("paragrafo-alert").innerHTML = msg;
    }
    else {
        // caso os dados sejam inválidos
        // alterando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        // chamada de função para informar erro
        verificaErro(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria);
    }
});

// função para calcular o número de faltas que o aluno pode ter sem ser reprovado
function calculaNumeroFaltas(cargaHorariaTotal) {
    // carga horária total (numero total de horas/aula) da disciplina
    var cht = parseInt(cargaHorariaTotal.value);
    // de acordo com o regimento da UFAL, o aluno deve ter 75% de frequência.
    // portanto, o número máximo de faltas possível é de 25% das aulas
    return parseInt(cht * 0.25);
}

// função para calcular o número de dias que o aluno pode faltar
function calculaNumeroDias(numeroFaltas, cargaHorariaDiaria) {
    // carga horária diária (numero diário de horas/aula) da disciplina
    var chd = parseInt(cargaHorariaDiaria.value);
    // o número de dias que podem ser faltados é a divisão do número de máximo de faltas pela C.H. diária
    var numDias = parseInt(numeroFaltas / chd);
    return parseInt(numDias);
}

/*  função que recebe os dados de entrada como parâmetros, verifica-os e
    retorna 1 se estiverem válidos, retorna 0 se estiverem inválidos
*/
function verificaDadosInformados(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria) {
    if ((nomeDisciplina.value != "") && (cargaHorariaTotal.value > 0) && (cargaHorariaDiaria.value > 0)) {
        return 1;
    }
    else {
        return 0;
    }
}

// função que recebe os dados de entrada como parâmetros, verifica-os e exibe o erro no documento
function verificaErro(nomeDisciplina, cargaHorariaTotal, cargaHorariaDiaria) {
    if (nomeDisciplina.value == "") {
        // caso o nome da disciplina seja inválido
        document.getElementById("paragrafo-alert").innerHTML = "Nome da disciplina inválido!";
    }
    else if (cargaHorariaTotal.value <= 0) {
        // caso a C.H.T. seja inválida
        document.getElementById("paragrafo-alert").innerHTML = "Carga Horária Total inválida!";
    }
    else if (cargaHorariaDiaria.value <= 0) {
        // caso a C.H.D. seja inválida
        document.getElementById("paragrafo-alert").innerHTML = "Carga Horária Diária inválida!";
    }
}
