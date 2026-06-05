const display = document.getElementById('display');
let expressao = "";

function Inserir(valor) {
    expressao += valor;
    let textovisor = expressao.replaceAll('.', ',');
    display.value = textovisor;
}

function calcular() {
    try {
        let resultado = eval(expressao);
        display.value = resultado.toString().replace('.', ',');
        expressao = resultado.toString();
    } catch (erro) {
        display.value = "Erro";
        expressao = "";
    }
}

function LimparDisplay() {
    expressao = "";
    display.value = "";
}