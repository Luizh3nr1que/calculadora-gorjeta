function calcular() {
    const inputValor = document.querySelector('#valor');

    if (inputValor.value === '') {
        const resultado = document.querySelector('#resultado').innerHTML = 'NaN';
    } else {

        const inputValor = document.querySelector('#valor').value;
        const inputPorcentagem = document.querySelector('#porcentagem').value;
        const resultado = document.querySelector('#resultado');

        const valorResultado = inputValor * inputPorcentagem;

        resultado.innerHTML = `${valorResultado.toFixed(2)}`;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        calcular();
    }
})

document.querySelector('.clear').addEventListener('click', () => {
    const inputValor = document.querySelector('#valor').value = '';
    const resultado = document.querySelector('#resultado').innerHTML = '00.00';
})