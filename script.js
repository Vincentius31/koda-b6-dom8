const form = document.getElementById("formSuhu");
const inputCelsius = document.getElementById("inputCelsius");
const historyTable = document.getElementById("historyTable");

let no = 1;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const celsius = parseFloat(inputCelsius.value);

    const fahrenheit = (celsius * 9/5) + 32;
    const reamur = celsius * 4/5;
    const kelvin = celsius + 273.15;

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${no++}</td>
        <td>${celsius.toFixed(2)}</td>
        <td>${fahrenheit.toFixed(2)}</td>
        <td>${reamur.toFixed(2)}</td>
        <td>${kelvin.toFixed(2)}</td>
    `;

    historyTable.appendChild(tr);
    });

