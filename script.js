const form = document.getElementById("formSuhu");
const inputCelsius = document.getElementById("inputCelsius");
const historyTable = document.getElementById("historyTable");

let historyData = JSON.parse(localStorage.getItem("historySuhu")) || [];
let no = historyData.length + 1;

function renderTable() {
    historyTable.innerHTML = "";

    historyData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.celsius}</td>
            <td>${item.fahrenheit}</td>
            <td>${item.reamur}</td>
            <td>${item.kelvin}</td>
        `;
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
