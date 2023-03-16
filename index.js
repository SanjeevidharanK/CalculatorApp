const input = document.querySelector('input');

function clearInput() {
    input.value = '';
}

function deleteInput() {
    input.value = input.value.slice(0, -1);
}

function appendInput(value) {
    if (value === '÷'){
        input.value += '/'
    }
    else{
        input.value += value;

    }
    
}

function calculate() {
    input.value = eval(input.value);
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'C') {
            clearInput();
        } else if (value === '←') {
            deleteInput();
        } else if (value === '=') {
            calculate();
        } else {
            appendInput(value);
        }
    });
});
