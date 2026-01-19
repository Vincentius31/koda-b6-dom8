$(document).ready(function () {
    const $form = $("#formSuhu");
    const $inputCelsius = $("#inputCelsius");
    const $historyTable = $("#historyTable");

    let historyData = JSON.parse(localStorage.getItem("historySuhu")) || [];

    function renderTable() {
        $historyTable.empty(); // historyTable.innerHTML = "";

        $.each(historyData, function (index, item) {
            const $tr = $("<tr>");

            $("<td>").text(index + 1).appendTo($tr);
            $("<td>").text(item.celsius).appendTo($tr);
            $("<td>").text(item.fahrenheit).appendTo($tr);
            $("<td>").text(item.reamur).appendTo($tr);
            $("<td>").text(item.kelvin).appendTo($tr);

            $historyTable.append($tr);
        });
    }

    renderTable();

    $form.on("submit", function (e) { //form.addEventListener("submit", function (event)
        e.preventDefault();

        const celsius = parseFloat($inputCelsius.val()); //const celsius = parseFloat(inputCelsius.value)
        if (isNaN(celsius)) return;

        const data = {
            celsius: celsius.toFixed(2),
            fahrenheit: ((celsius * 9 / 5) + 32).toFixed(2),
            reamur: (celsius * 4 / 5).toFixed(2),
            kelvin: (celsius + 273.15).toFixed(2)
        };

        historyData.push(data);

        localStorage.setItem("historySuhu", JSON.stringify(historyData));

        renderTable();

        $inputCelsius.val("");
    });
});
