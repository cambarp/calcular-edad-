document.getElementById('calcularBtn').addEventListener('click', function () {
          
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var fechaNacimiento = new Date(year, month - 1, day);

    var fechaActual = new Date();

    var diferencia = fechaActual - fechaNacimiento;
    var edad = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000));
    var meses = Math.floor((diferencia % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var dias = Math.floor((diferencia % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById('yearsSpan').innerText = edad;
    document.getElementById('monthsSpan').innerText = meses;
    document.getElementById('daysSpan').innerText = dias;

    
})
