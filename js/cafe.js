// atribuindo o botão da página a uma variável
var botaoCalcular = document.querySelector(".calcular");

/* cria um event listener para executar a função sempre
que o botão for clicado */
botaoCalcular.addEventListener("click", function (event) {

    /* atribuindo o componente html select usado para escolher o
       local(lanchonete e tipo de café) a uma variável;
       o valor da opção selecionada é o preço unitário do café,
       enquanto o texto da opção informa o nome do local. */
    var local = document.querySelector(".local");

    // atribuindo a entrada quantidade(quantos cafés) a uma variável
    var quantidade = document.querySelector(".quantidade");

    // preco = preço unitário da opção de café X quantidade
    var preco = parseFloat(local.value * quantidade.value).toFixed(2);

    // atribuindo o nome do local(lanchonete) a partir do retorno da função verificaLocal
    var nomeLocal = verificaLocal(local.options[local.selectedIndex].text);

    // atribuindo o componente de saída da página a uma variável
    var alert = document.querySelector(".alert");

    // verificando erros de entrada
    if (local.value == 0) {
        // caso nenhum local(lanchonete) tenha sido selecionado
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        // informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe uma lanchonete válida.";
    }
    else if (quantidade.value == "" || quantidade.value < -1) {
        // caso a quantidade informada seja inválida
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        // informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe um valor válido.";
    }
    else {
        // caso a quantidade seja inválida
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        // informando valor a ser gasto com café
        document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ " + preco + " de café no " + nomeLocal + " esse mês.";
    }
});


/*  função para verificar a string de nome do local e
    retornar apenas o nome sem informações adicionais
    (e.g. remove a sequência de caracteres ' - 200ml')
*/
function verificaLocal(local) {
    if (local.indexOf('-') > - 1) {
        /*  se o nome tiver hífen, e consequentemente informações adicionais,
        retorna uma substring, excluindo tudo a partir do hífen e mantendo
        apenas o nome original */
        return local.substring(0, local.indexOf('-'));
    }
    else {
        /* se nao tiver hífen, nao tem infos adicionais, então
            o nome original é retornado */
        return local;
    }
}
