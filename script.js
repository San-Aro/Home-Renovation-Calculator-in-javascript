const form = document.getElementById("form");


function logSubmit(event) {
    let szelesseg = parseInt(document.getElementById("szelesseg").value);
    let hosszusag = parseInt(document.getElementById("hosszusag").value);
    let magassag = parseInt(document.getElementById("magassag").value);
    let ajtok_szama = parseInt(document.getElementById("ajtok_szama").value);
    let ablakok_szama = parseInt(document.getElementById("ablakok_szama").value);

    console.log(`plafon: ${Math.ceil((((szelesseg/100) * (hosszusag/100)) * 5) / 10) * 10  }`)
    console.log(`falak: ${Math.ceil((((szelesseg/100) * (magassag/100)) * 5) / 10) * 10 + Math.ceil((((hosszusag/100) * (magassag/100)) * 5) / 10) * 10 }`)

    


    event.preventDefault();
}

form.addEventListener("submit", logSubmit);