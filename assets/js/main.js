
let mw19 = document.getElementById("mw19");
let mw7 = document.getElementById("mw7");
let amount = document.getElementById("amount");
let output = document.getElementById("output");
let mvtext = document.getElementById("mwAmount");
let btext = document.getElementById("bruttoBetrag");
let ntext = document.getElementById("nettoBetrag")
function calc() {
    console.log("test");
    if (document.getElementById('nettotoBrutto').checked == true) {
        if (mw19.checked == true) {
            let amount2 = Number(amount.value);
            let bruttobetrag = amount2 * 1.19;
            // console.log(bruttobetrag.toFixed(2));
            let mwBetrag = bruttobetrag - amount2;
            mvtext.innerHTML = (mwBetrag.toFixed(2) + " €");
            btext.innerHTML = (bruttobetrag.toFixed(2) + " €");
            // let netto = document.getElementById("netto");
            // netto.classList.replace("netto", "brutto");

        }

        else if (mw7.checked == true) {
            let amount2 = Number(amount.value);
            let bruttobetrag = amount2 * 1.07;
            let mwBetrag = bruttobetrag - amount2;
            mvtext.innerHTML = (mwBetrag.toFixed(2) + " €");
            btext.innerHTML = (bruttobetrag.toFixed(2) + " €");
        }
    } else if (document.getElementById('bruttotoNetto').checked == true) {
        if (mw19.checked == true) {
            let amount2 = Number(amount.value);
            let nettobetrag = amount2 / 1.19;
            let mwBetrag = amount2 - nettobetrag;
            mvtext.innerHTML = (mwBetrag.toFixed(2) + " €");
            ntext.innerHTML = (nettobetrag.toFixed(2) + " €")
        }

        else if (mw7.checked == true) {
            let amount2 = Number(amount.value);
            let nettobetrag = amount2 / 1.07;
            let mwBetrag = amount2 - nettobetrag;
            mvtext.innerHTML = (mwBetrag.toFixed(2) + " €");
            ntext.innerHTML = (nettobetrag.toFixed(2) + " €")
        }
    } else {
        output.innerHTML = ("ERROR");
    }

}
