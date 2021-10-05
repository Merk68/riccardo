function kSz() {
    let r = document.getElementById('r').value;
    let Kk= parseInt(2 * r * Math.PI);
    let Kt= parseInt(Math.pow(r,2) * Math.PI);
    document.getElementById('Kk').value = Kk;
    document.getElementById('Kt').value = Kt;
}

function tSz() {
    let h = document.getElementById('h').value;
    let sz = document.getElementById('sz').value;
    let TK = parseInt((h * 2) + (sz * 2));
    let TT = parseInt(h * sz);
    document.getElementById('TK').value = TK;
    document.getElementById('TT').value = TT;
}

function riccardoinc(){
    document.getElementById("test").style.backgroundImage = "url(bavatogay-ricardo-milos.gif)";

    const button = document.getElementById('gomb');
    gomb.addEventListener('click', event => {button.value = ` why are u gae?`}
    )
    document.getElementById("test").style.backgroundImage = "url(letöltés.jfif)";
}

