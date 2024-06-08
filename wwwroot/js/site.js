var textarea;

document.onload = function () {
    //textarea = document.getElementById('metarTb')
}

window.Alert = function (message) {
    alert(message);
}

function autoResize(textarea) {

    if (textarea) {
        textarea.style.minWidth = "100px";

        textarea.style.width = "auto";

        textarea.style.width = textarea.value.length * 14 + "px";
    }
    else {
        console.log("textarea not found");
    }
}

function logMetar(metar) {
    console.log(metar);
}