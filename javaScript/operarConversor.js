document.addEventListener('DOMContentLoaded', () => {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amountInput');
    const convertButton = document.getElementById('convertButton');
    const resultElement = document.getElementById('result');
    const closeButton = document.getElementById('closeButton');

    const convertCurrency = () => {
        const amount = amountInput.value;
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const host = 'api.frankfurter.app';
        const url = `https://${host}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                const conversionResult = `${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
                resultElement.textContent = conversionResult;
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
                resultElement.textContent = 'Asegurate de seleccionar diferentes divisas';
            });
    };

    convertButton.addEventListener('click', convertCurrency);

    amountInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            convertCurrency();
        }
    });
    

});
