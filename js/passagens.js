/* atribui o botão da página à variável "botaoCalcular" */
var botaoCalcular = document.querySelector(".calcular");

/* cria um event listener para executar a função sempre
que o botão for clicado */
botaoCalcular.addEventListener("click", function (event) {

  // pegando valores da página e atribuindo a variáveis
  var meioTransporte = document.querySelector(".meio-transporte");
  var qtdViagens = document.querySelector(".qtd-viagens");
  var alert = document.querySelector(".alert");

  // iniciando variavel preço com o retorno da função calculaPreco
  var preco = calculaPreco(meioTransporte, qtdViagens);

  // iniciando variavel nome com o retorno da função verificaTransporte
  var nomeTransporte = verificaTransporte(meioTransporte.value);

  // verificando erros de entrada
  if (meioTransporte.value == 0) {
    // caso nenhum meio de transporte tenha sido selecionado
    // mudando estilos do componente de saída
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");

    // informando o erro
    document.getElementById("paragrafo-alert").innerHTML = "Informe um meio de transporte válido";
  }
  else if (qtdViagens.value < 0) {
    // caso a quantidade de viagens seja inválida
    // mudando estilos do componente de saída
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");

    // informando o erro
    document.getElementById("paragrafo-alert").innerHTML = "Informe uma quantidade válida para as viagens.";
  }
  else {
    // caso nenhum erro tenha sido encontrado
    // mudando estilos do componente de saída
    alert.classList.remove("invisivel");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");

    // informando o valor gasto com as passagens
    let msg = "Você pagará R$ " + preco + " de passagem de " + nomeTransporte + " esse mês.";
    document.getElementById("paragrafo-alert").innerHTML = msg;
  }
});

/* funcao para calcular o preço das viagens, a partir do custo
 da passagem no meio de transporte e da quantidade de viagens */
function calculaPreco(meioTransporte, qtdViagens) {
  if (document.getElementById("checkbox-desconto").checked) {
    // se a opção de desconto for selecionada, retorna metade do valor total
    return parseFloat((meioTransporte.value * qtdViagens.value) / 2.0).toFixed(2);
  }
  else {
    // sem o desconto, o valor é o preço da passagem vezes a quantidade de viagens
    return parseFloat(meioTransporte.value * qtdViagens.value).toFixed(2);
  }
}

/* funcao para verificar qual o meio de transporte: a partir do preco
 da passagem, retorna o nome do meio de transporte */
function verificaTransporte(precoPassagem) {
  if (precoPassagem == 3.65) {
    return "ônibus";
  }
  else if (precoPassagem == 4.60) {
    return "ônibus metropolitano";
  }
  else if (precoPassagem == 5) {
    return "van";
  }
}
