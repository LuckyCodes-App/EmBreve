var countDate = new Date('May 1, 2023 00:00:00').getTime();

function lançamento() {
    var now = new Date().getTime();
    gap = countDate - now;

    var segundo = 1000;
    var minuto = segundo * 60;
    var hora = minuto * 60;
    var dia = hora * 24;

    var d = Math.floor(gap / (dia));
    var h = Math.floor((gap % (dia)) / (hora));
    var m = Math.floor((gap % (hora)) / (minuto));
    var s = Math.floor((gap % (minuto)) / (segundo));

    document.getElementById('dia').innerText = d;
    document.getElementById('hora').innerText = h;
    document.getElementById('minuto').innerText = m;
    document.getElementById('segundo').innerText = s;
}

setInterval(function() {
    lançamento();
}, 1000);