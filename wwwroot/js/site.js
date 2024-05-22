
var textarea = document.getElementById("metarTb");



function autoResize() {

    textarea.style.minWidth = "100px";

    textarea.style.width = "auto";
    textarea.style.width = textarea.value.length * 15.5 + "px";
}

function showResults() {
    var mainView = document.getElementById("mainView");

    var resultsView = document.getElementById("resultsView");

    mainView.style.visibility = "hidden";
    resultsView.style.visibility = "visible";
}

function logMetar(metar) {
    console.log(metar);
}