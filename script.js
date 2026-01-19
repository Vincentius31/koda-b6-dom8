const form = document.getElementById("formSuhu");
const inputCelsius = document.getElementById("inputCelsius");
const historyTable = document.getElementById("historyTable");


let historyData = JSON.parse(localStorage.getItem("historySuhu")) || [];
let no = historyData.length + 1;

function renderTable() {
    historyTable.innerHTML = "";

    historyData.forEach((item, index) => {
        const tr = document.createElement("tr");

        const tdNo = document.createElement("td");
        tdNo.textContent = index+1;

        const tdCelcius = document.createElement("td");
        tdCelcius.textContent = item.celsius;

        const tdFahrenheit = document.createElement("td");
        tdFahrenheit.textContent = item.fahrenheit;

        const tdReamur = document.createElement("td");
        tdReamur.textContent = item.reamur;

        const tdKelvin = document.createElement("td");
        tdKelvin.textContent = item.kelvin
        
        tr.appendChild(tdNo);
        tr.appendChild(tdCelcius);
        tr.appendChild(tdFahrenheit);
        tr.appendChild(tdReamur);
        tr.appendChild(tdKelvin);

        historyTable.appendChild(tr);
    });
}

renderTable();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const celsius = parseFloat(inputCelsius.value);

    if (isNaN(celsius)) return;

    const data = {
        celsius: celsius.toFixed(2),
        fahrenheit: ((celsius * 9/5) + 32).toFixed(2),
        reamur: (celsius * 4/5).toFixed(2),
        kelvin: (celsius + 273.15).toFixed(2)
    };

    historyData.push(data);

    localStorage.setItem("historySuhu", JSON.stringify(historyData));

    renderTable();

    inputCelsius.value = "";
});
