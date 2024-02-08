const url = 'https://currencyconverter.p.rapidapi.com/availablecurrencies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
	}
};

const currencyListElement = document.getElementById('currencyList');

try {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Crear una lista desordenada para mostrar las monedas disponibles
            const ul = document.createElement('ul');

            // Iterar sobre los datos recibidos y crear un elemento de lista para cada moneda
            data.forEach(currency => {
                const li = document.createElement('li');
                li.textContent = currency;
                ul.appendChild(li);
            });

            // Limpiar el contenido anterior y agregar la lista de monedas al elemento en el HTML
            currencyListElement.innerHTML = '';
            currencyListElement.appendChild(ul);
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
            currencyListElement.textContent = 'Error al obtener datos de la API';
        });
} catch (error) {
	console.error(error);
    currencyListElement.textContent = 'Error al obtener datos de la API';
}
