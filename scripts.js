let ilgis;
let pokytis;
let skirtumas;


$(document).ready(function () {
    let self = this;


    // Atsakymo forma
    $('#form').on('submit', e => {
        e.preventDefault();
        let formData = $('#form').serializeArray();
        let parsedData = {};
        $(formData).each(function (index, obj) {
            parsedData[obj.name] = obj.value;
        });
        self.ilgis = parsedData.ilgis;
        self.pokytis = parsedData.pokytis;
        self.skirtumas = parsedData.skirtumas;
        let answerNum = parsedData.pokytis / (parsedData.ilgis * parsedData.skirtumas);

        let answerOutput = $('#answerOutput');

        if (!isNaN(answerNum) && isFinite(answerNum)) {
        answerOutput.css("color", "green");
        answerOutput.css("font-size", "40px");
        answerOutput.css("align-content", "center");
        var num = Number(answerNum);
        var roundedString = num.toFixed(7);
        answerOutput[0].innerHTML = "Apskaičiuotas vidutinis ilgėjimas:<br>" + roundedString + " K⁻¹";

        } else {
        answerOutput.css("color", "red");
        answerOutput.css("font-size", "40px");
        answerOutput[0].innerHTML = "Įvesti ne visi duomenys arba duomenys neteisingi.";
        }
    });

    $('.js-nav').on('click', e => {
        e.preventDefault();
        $('.js-nav').removeClass('disabled');
        $(e.target).addClass('disabled');
        $('.js-tab').toggle();
    });
});



function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

