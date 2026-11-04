const form = document.getElementById("form");

let szelesseg;
let magassag;
let hosszusag;
let ajtok_szama;
let ablakok_szama;

const ajtoTerulet = 0.9 * 2.0;      // 1 ajtó területe: 90x200 cm = 1.8 m²
const ablakTerulet = 1.2 * 1.5;    // 1 ablak területe: 120x150 cm = 1.8 m²
    
const festekFedes = 5;          // 5 liter festék kell 1 m²-re (feladat szerint)
const festekEgyseg = 10;        // 10 literes kiszerelés
const festekAr = 15000;         // 1 db 10 literes festék ára (Ft)

const padloFedes = 2.5;         // 1 doboz laminált padló = 2.5 m²
const padloAr = 4000;           // 1 m2 padló ára (Ft)

function logSubmit(event) {
    // 0. Az oldal újratöltődésének megakadályozása a függvény ELEJÉN
    event.preventDefault();

    // 1. Adatok beolvasása (parseInt helyett parseFloat, hogy a tizedes méretek is működjenek)
    let szIn = parseFloat(document.getElementById("szelesseg").value);
    let hIn = parseFloat(document.getElementById("hosszusag").value);
    let mIn = parseFloat(document.getElementById("magassag").value);
    let ajIn = parseInt(document.getElementById("ajtok_szama").value);
    let abIn = parseInt(document.getElementById("ablakok_szama").value);

    // isNaN()-nel ellenőrizzük, hogy számot kaptunk-e
    szelesseg = !isNaN(szIn) ? szIn : 0;
    hosszusag = !isNaN(hIn) ? hIn : 0;
    magassag = !isNaN(mIn) ? mIn : 0;
    ajtok_szama = !isNaN(ajIn) ? ajIn : 0;
    ablakok_szama = !isNaN(abIn) ? abIn : 0;

    // 2. Felületek kiszámítása
    let plafon = hosszusag * szelesseg;
    let falTerulet = 2 * (szelesseg * magassag + hosszusag * magassag);
    let nyilasZarok = (ajtok_szama * ajtoTerulet) + (ablakok_szama * ablakTerulet);
    let festhetoFalak = Math.max(0, falTerulet - nyilasZarok);
    let osszFestendoTerulet = plafon + festhetoFalak;

    // 3. Festék kiszámítása
    let nettoFestek = osszFestendoTerulet * festekFedes;            // Szükséges nettó festék (liter)
    let bruttoFestek = nettoFestek * 1.05;                          // 5% ráhagyással
    let szuksegesFestek = Math.ceil(bruttoFestek / festekEgyseg);   // Vásárolandó 10L-es vödrök száma
    let megvasaroltFestek = szuksegesFestek * festekEgyseg;         // Ténylegesen megvásárolt literek
    let osszFestekAr = szuksegesFestek * festekAr;                  // Festék ára

    // 4. Laminált padló kiszámítása
    let padloTerulet = plafon;                                      // Nettó padlófelület (m²)
    let bruttoPadlo = padloTerulet * 1.05;                          // 5% ráhagyással (m²)
    let padloDoboz = Math.ceil(bruttoPadlo / padloFedes);           // Vásárolandó dobozok száma
    let megvasaroltPadlo = padloDoboz * padloFedes;                 // Megvásárolt m²
    let osszPadloAr = megvasaroltPadlo * padloAr;                   // Padló ára

    // 5. Összesített ár
    let nagyTotal = osszFestekAr + osszPadloAr;

    // 6. Kiíratás a HTML-be
    let eredmenyDiv = document.getElementById("eredmeny");
    if (eredmenyDiv) {
        eredmenyDiv.innerHTML = `
            <p><b>Plafon területe:</b> ${plafon.toFixed(2)} m²</p>
            <p><b>Festendő falak:</b> ${festhetoFalak.toFixed(2)} m²</p>
            <p><b>Összes festendő felület:</b> ${osszFestendoTerulet.toFixed(2)} m²</p>
            <p><b>Szükséges festék:</b> ${szuksegesFestek} vödör (${megvasaroltFestek} liter) - ${osszFestekAr.toLocaleString()} Ft</p>
            <p><b>Szükséges padló:</b> ${padloDoboz} doboz (${megvasaroltPadlo.toFixed(1)} m²) - ${osszPadloAr.toLocaleString()} Ft</p>
            <h4>Összesen fizetendő: ${nagyTotal.toLocaleString()} Ft</h4>
        `;
    }
}

if (form) {
    form.addEventListener("submit", logSubmit);
}