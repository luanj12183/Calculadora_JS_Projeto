const display = document.getElementById('display');

function AdicionaraoDisplay(valor) {
    display.value += valor;
}

function LimparDisplay() {
    display.value = '';
}

function calcular() {      
    try {                  
        if (display.value !== '') { 
            display.value = eval(display.value);
        }                   
    } catch (error) {      
        display.value = 'Erro';
    }                      
}