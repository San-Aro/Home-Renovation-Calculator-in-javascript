const form = document.getElementById("form");

let szelesseg;
let magassag;
let hosszusag;
let ajtok_szama;
let ablakok_szama;

function logSubmit(event) {

    if (parseInt(document.getElementById("szelesseg").value) !== NaN){szelesseg = parseInt(document.getElementById("szelesseg").value);}else{szelesseg = 0};
    if (parseInt(document.getElementById("hosszusag").value) !== NaN){hosszusag = parseInt(document.getElementById("hosszusag").value);}else{hosszusag = 0};
    if (parseInt(document.getElementById("magassag").value) !== NaN){magassag = parseInt(document.getElementById("magassag").value);}else{magassag = 0};
    if (parseInt(document.getElementById("ajtok_szama").value) !== NaN){ajtok_szama = parseInt(document.getElementById("ajtok_szama").value);}else{ajtok_szama = 0};
    if (parseInt(document.getElementById("ablakok_szama").value) !== NaN){ablakok_szama = parseInt(document.getElementById("ablakok_szama").value);}else{ablakok_szama = 0};

    let plafonFestek = Math.ceil((((szelesseg/100) * (hosszusag/100)) * 5) / 10) * 10;
    let padlo = Math.ceil((((szelesseg/100) * (hosszusag/100)) / 2.5) / 10) * 10;
    let falFestek = Math.ceil((((szelesseg/100) * (magassag/100)) * 5) / 10) * 10 + Math.ceil((((hosszusag/100) * (magassag/100)) * 5) / 10) * 10;
    let ajtok = Math.ceil((((90/100) * (200/100)) * 5) / 10) * 10 * ajtok_szama;
    let ablakok = Math.ceil((((90/100) * (200/100)) * 5) / 10) * 10 * ablakok_szama

    console.log(plafonFestek, falFestek, ajtok, ablakok, padlo)
    console.log(((szelesseg/100) * (hosszusag/100)))
    console.log(Math.ceil(((plafonFestek + falFestek - ajtok - ablakok) * 1.05) / 10) * 10)
    console.log(Math.ceil((padlo * 1.05) / 10) * 10)

    event.preventDefault();
}

form.addEventListener("submit", logSubmit);