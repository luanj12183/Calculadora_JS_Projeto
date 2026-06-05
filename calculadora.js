const display = document.getElementById('display');
const historico = document.getElementById('historico'); 
let expressao = "";

function Inserir(valor) {
    console.log("Botão clicado: " + valor); 
    expressao += valor;
    
    historico.innerText = expressao.replaceAll('.', ',').replaceAll('*', 'x').replaceAll('/', '÷');
    
    display.value = expressao.replaceAll('.', ',');
}

function calcular() {
    try {
        let resultado = eval(expressao);
        
        historico.innerText = expressao.replaceAll('.', ',').replaceAll('*', 'x').replaceAll('/', '÷') + " =";
        
        display.value = resultado.toString().replace('.', ',');
        expressao = resultado.toString();
    } catch (erro) {
        display.value = "Erro";
        expressao = "";
        historico.innerText = "";
    }
}

function Limpar() {
    expressao = "";
    display.value = "0";
    historico.innerText = "";
}