document.getElementById("uitkomstcontainer").style.display = "none";
//document.getElementById("uitkomstcontainer").style.visibility = "collapse";

document.getElementById("year").innerHTML = new Date().getFullYear();

function bereken() {
    var inhoud = document.getElementById("inhoudZwembad").value;
    var ph = document.getElementById("phWaarde").value;
    var chloor = document.getElementById("chloorWaarde").value;
    var regen = document.getElementById("geregend").value
    var chloorSoort = document.getElementById("soortChloor").value

    inhoud = parseFloat(inhoud.replace(/,/g, '.'));
    ph = parseFloat(ph.replace(/,/g, '.'));
    chloor = parseFloat(chloor.replace(/,/g, '.'));

    var resultaat = parseFloat(inhoud) + parseFloat(ph) + parseFloat(chloor);

 


    if (!isNaN(resultaat)) {
        document.getElementById("uitkomstcontainer").style.display = "block";
        document.getElementById("huidigChloor").innerHTML = chloor + ' ppm';
        document.getElementById("toevoegenChloor").innerHTML = hoeveelheidChloor(inhoud, chloor, chloorSoort);
        document.getElementById("huidigPH").innerHTML = ph;
        document.getElementById("huidigPH2").innerHTML = ph;
        document.getElementById("toevoegenPHPlus").innerHTML = hoeveelheidPHPlus(inhoud, ph);
        document.getElementById("toevoegenPHMin").innerHTML = hoeveelheidPHMin(inhoud, ph);
        document.getElementById("toevoegenAntiAlg").innerHTML = hoeveelheidAntiAlg(inhoud, regen);
    }
}

//hoeveelheid chloor wordt hier uitgerekend
function hoeveelheidChloor(inhoud, huidigChloor, chloorSoort) {
    if (huidigChloor >= 3) {
        if (chloorSoort === 'Poeder') {
            return 0 + " gram";
        }
        else if (chloorSoort === 'Vloeibaar') {
            return 0 + " ml";
        }
    }

    if (chloorSoort === 'Poeder') {
        var benodigdppm = (3.0 - parseFloat(huidigChloor));
        var toevoegenChloor = (1.8 * inhoud) * benodigdppm;
        toevoegenChloor = Math.round(toevoegenChloor);

        return toevoegenChloor + " gram";
    }

    if (chloorSoort === 'Vloeibaar') {
        var benodigdppm = (3.0 - parseFloat(huidigChloor));
        var vloeibaarChloor = (20 / 3);
        var toevoegenChloor = Math.round((vloeibaarChloor * inhoud) * benodigdppm);

        return toevoegenChloor + " ml";
    }
}

//hoeveelheid PH+ wordt hier uitgerekend
function hoeveelheidPHPlus(inhoud, ph) {
    if (ph >= 7.2) {
        return 0 + " gram"
    }

    if (ph < 7.2) {
        var benodigdph = (7.2 - ph) / 0.1;
        var toevoegenPHPlus = Math.round((benodigdph * 8) * inhoud);

        return toevoegenPHPlus + " gram";

    }
}

//hoeveelheid PH- wordt hier uitgerekend
function hoeveelheidPHMin(inhoud, ph) {
    if (ph <= 7.6) {
        return 0 + " gram"
    }

    if (ph > 7.6) {
        var benodigdph = (ph - 7.6) / 0.1;
        var toevoegenPHMin = Math.round((benodigdph * 8) * inhoud);

        return toevoegenPHMin + " gram";

    }
}

//hoeveelheid anti-alg wordt hier uitgerekend
function hoeveelheidAntiAlg(inhoud, regen) {
    if (regen === "Ja") {
        var benodigdAntiAlg = Math.round(8 * inhoud);

        return benodigdAntiAlg + " ml";
    }


    else return "-";
}
