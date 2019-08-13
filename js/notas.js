// atribuindo o botão da página a uma variável
var botaoCalcular = document.querySelector(".calcular");

/* cria um event listener para executar a função sempre
que o botão for clicado */
botaoCalcular.addEventListener("click", function (event) {

    // lendo valores do documento html e atribuindo-os às respectivas variáveis
    var ab1 = document.querySelector(".ab1");
    var ab2 = document.querySelector(".ab2");
    var reav = document.querySelector(".reav");

    // atribuindo o componente de saída a uma variável
    var alert = document.querySelector(".alert");

    // calculando a media com a função calculaNota
    var media = calculaNota(ab1.value, ab2.value, reav.value).toFixed(2);

    // verificando erros
    if (ab1.value < 0 || ab1.value > 10 || ab1.value == "") {
        // caso a nota da AB1 seja inválida
        // alterando estilos da saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        // informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido para a AB1.";
    }
    else if (ab2.value < 0 || ab2.value > 10 || ab2.value == "") {
        // caso a nota da AB2 seja inválida
        // alterando estilos da saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        // informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido para a AB2.";
    }
    else if (media >= 7) {
        // caso nao existam erros, e a nota for maior ou igual a 7
        // alterando estilos da saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        // informando que o aluno está APROVADO
        let msg = "Com média " + media + " você já está aprovado e não precisa fazer a avaliação final!";
        document.getElementById("paragrafo-alert").innerHTML = msg;
    }
    else if (media < 5.0) {
        // caso nao existam erros, e a nota for menor que 5
        // alterando estilos da saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        // informando que o aluno está REPROVADO
        let msg = "Você foi reprovado e não poderá fazer a avaliação final, pois a média " + media + " é menor que 5!";
        document.getElementById("paragrafo-alert").innerHTML = msg;
    }
    else {
        // caso nao existam erros, e a nota for maior que 5 e menor que 7
        // alterando estilos da saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        // calculando a nota necessária para ser aprovado na avaliação final
        // a partir da fórmula: (6 * MediaAB1,AB2 + 4 * NotaProvaFinal) / 10 = 5,5
        // tem-se NotaProvaFinal = 55 - (6 * MediaAB1,AB2 / 4)
        var notaFinal = ((55 - parseFloat(6 * parseFloat(media))) / 4.0).toFixed(2);
        // informando nota necessária na final
        let msg = "Para ser aprovado, você precisará tirar, no mínimo, " + notaFinal + " na avaliação final!";
        document.getElementById("paragrafo-alert").innerHTML = msg;
    }
});

// função para calcular a nota (média) do aluno
// recebe o valor da ab1, da ab2 e da reavaliação
function calculaNota(ab1, ab2, reav) {
    // SE ab1 > ab2 E reav > ab2
    if (parseFloat(ab1) > parseFloat(ab2) && parseFloat(reav) > parseFloat(ab2)) {
        // nota da ab2 é substituida pela nota da reavaliação
        ab2 = parseFloat(reav);
        // retorna o resultado do cálculo da média (media = (ab1 + ab2) / 2)
        // nota-se que a ab2 agora possui o valor da reavaliação
        return (parseFloat(ab1) + parseFloat(ab2)) / 2.0;
    }
    // SE NAO, SE ab1 > ab2 E reav > ab2
    else if (parseFloat(ab2) > parseFloat(ab1) && parseFloat(reav) > parseFloat(ab1)) {
        // nota da ab1 é substituida pela nota da reavaliação
        ab1 = parseFloat(reav);
        // retorna o resultado do cálculo da média (media = (ab1 + ab2) / 2)
        // nota-se que a ab1 agora possui o valor da reavaliação
        return (parseFloat(ab1) + parseFloat(ab2)) / 2.0;
    }
    // SE NAO, SE ab1 == ab2 E reav > ab1
    else if (parseFloat(ab1) == parseFloat(ab2) && parseFloat(reav) > parseFloat(ab1)) {
        /*  quando ab1 e ab2 são iguais, e a reavaliação tem nota maior que elas,
            a nota da ab1 é substituida pela nota da reavaliação */
        ab1 = parseFloat(reav);
        // retorna o resultado do cálculo da média (media = (ab1 + ab2) / 2)
        // nota-se que a ab1 agora possui o valor da reavaliação
        return (parseFloat(ab1) + parseFloat(ab2)) / 2.0;
    }
    // SE NAO
    else {
        // quando a reavaliação não é maior que ab1 nem ab2, nenhuma nota é substituida
        // retorna o resultado do cálculo da média (media = (ab1 + ab2) / 2)
        return (parseFloat(ab1) + parseFloat(ab2)) / 2.0;
    }
}
