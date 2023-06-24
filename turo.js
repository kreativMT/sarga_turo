

function szamol() {

let fo = document.getElementById("fo").value;

let tej = fo * 0.2;
let tojas = fo * 2;
let kristalycukor = fo;



document.getElementById("tej").innerText = tej;
document.getElementById("tojas").innerText = tojas;
document.getElementById("kristalycukor").innerText = kristalycukor;
}

szamol();