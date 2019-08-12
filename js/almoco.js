/* atribui o botão da página à variável "botaoCalcular" */
var botaoCalcular = document.querySelector(".calcular");

/* atribui o componente select-restaurante da página à variável "restaurante" */
var restaurante = document.querySelector(".restaurante");

var tipoRestaurante; // 1 = por peso; 2 = por unidade

/* cria um event listener para executar a função sempre
que oum restaurante for selecionado */
restaurante.addEventListener("change", function (event) {
    // atribuindo o nome do restaurante
    var nomeRestaurante = restaurante.options[restaurante.selectedIndex].text;

    /*  verificando se o restaurante é "por peso" ou não:
        a verificação é feita checando se o texto 'por peso'
        está contido na string do nome do restaurante
    */
    if (nomeRestaurante.indexOf('por peso') > -1) {
        tipoRestaurante = 1;
        // exibe o input por peso (gramas) e esconte o por quantidade (unidades)
        document.getElementById("input-quantidade").hidden = true;
        document.getElementById("input-peso").hidden = false;
    }
    else {
        tipoRestaurante = 2;
        // exibe o input por quantidade (unidades) e esconte o por peso (gramas)
        document.getElementById("input-peso").hidden = true;
        document.getElementById("input-quantidade").hidden = false;
    }
});

/* cria um event listener para executar a função sempre
que o botão for clicado */
botaoCalcular.addEventListener("click", function (event) {
    // atribuindo o nome do restaurante sem informações adicionais (e.g. 'por peso')
    nomeRestaurante = verificaRestaurante(restaurante.options[restaurante.selectedIndex].text);
    
    // atribuindo o componente de saída da página
    var alert = document.querySelector(".alert");

    /* cálculo do preço, dependendo do tipo de restaurante */
    if (tipoRestaurante == 1) {
        // pegando o peso do prato
        var quantidade = document.querySelector(".peso");
        // calculando preco (preco = valor por Kg X quantidade de Kg's)
        var preco = parseFloat(restaurante.value * (quantidade.value/1000)).toFixed(2);
        
        // se o restaurante for o CEDU, o preço máximo é sempre 14 reais (regra de negócio)
        if(nomeRestaurante.indexOf("CEDU") > -1 && preco > 14.00) preco = 14.00.toFixed(2);
    }
    else {
        // pegando a quantidade de almoços
        var quantidade = document.querySelector(".quantidade");
        // calculando preco (preco = preco unitário X quantidade)
        var preco = parseFloat(restaurante.value * quantidade.value).toFixed(2);
    }

    // verificando erros de entrada
    if (restaurante.value == 0) {
        // caso nenhum restaurante tenha sido selecionado
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");

        //informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe um restaurante válido.";
    }
    else if (quantidade.value == "" || quantidade.value < 0) {
        // caso a quantidade seja inválida
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");

        //informando erro
        document.getElementById("paragrafo-alert").innerHTML = "Informe uma quantidade válida.";
    }
    else {
        // caso nenhum erro seja encontrado
        // mudando estilos do componente de saída
        alert.classList.remove("invisivel");
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");

        // informando o preço do almoço
        document.getElementById("paragrafo-alert").innerHTML = "Você pagará R$ " + preco + " de almoço no " + nomeRestaurante + ".";
    }
});

/* função para verificar o restaurante e retornar seu nome
    sem informações adicionais (e.g. 'por peso')
*/
function verificaRestaurante(restaurante) {
    if (restaurante.indexOf(' -') > - 1) {
        /*  se o nome tiver hífen, e consequentemente informações adicionais,
            retorna uma substring, excluindo tudo a partir do hífen e mantendo
            apenas o nome original */
        return restaurante.substring(0, restaurante.indexOf(' -'));
    }
    else {
        // caso contrário retorna o nome que já está correto
        return restaurante;
    }
}
