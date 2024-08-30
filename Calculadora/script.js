function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Avalia a expressão no display
        const result = eval(display.value);
        // Exibe o resultado em um pop-up
        alert('Resultado: ' + result);
        // Limpa o display após mostrar o resultado
        display.value = '';
    } catch (e) {
        alert('Erro: ' + e.message);
        display.value = '';
    }
}