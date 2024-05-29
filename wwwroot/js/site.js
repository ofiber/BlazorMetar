
var textarea = document.getElementById("metarTb");
var icao;

window.Alert = function (message) {
    alert(message);
}

function autoResize() {

    textarea.style.minWidth = "100px";

    textarea.style.width = "auto";
    textarea.style.width = textarea.value.length * 15.5 + "px";
}

function logMetar(metar) {
    console.log(metar);
}