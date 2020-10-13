const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const nameblock = document.querySelector("#name");
const saldonaytto = document.querySelector("#saldo");
const panos = document.querySelector("#panos");

let fruits = [f1, f2, f3, f4];
let playerName= "";
let numero = [0, 0, 0, 0];
let saldo = 50;
let pelaaja ="";
let lockvalue = [0, 0, 0, 0];
let bet = 0;
let x;
screenupdate();
imgupdate2();
/* Screen Update Function */
function screenupdate() {
    panos.innerText = bet;
    saldonaytto.innerText = saldo;
}

function imgupdate2(){
    for(x=0; x < 4; x++) {
        if(lockvalue[x] == 0){
            if(numero[x] == 1) {
                fruits[x].src = "/kuvat/omena.png";}
            else if(numero[x] == 2) {
                fruits[x].src = "/kuvat/paaryna.png";}
            else if(numero[x] == 3) {
                fruits[x].src = "/kuvat/kirsikka.png";}
            else if(numero[x] == 4) {
                fruits[x].src = "/kuvat/vesimelooni.png";}
            else {
                fruits[x].src = "/kuvat/vesimelooni.png";}}
        else {
            if(lockvalue[x] == 1) {
                fruits[x].src = "/kuvat/omena.png";}
            else if(lockvalue[x] == 2) {
                fruits[x].src = "/kuvat/paaryna.png";}
            else if(lockvalue[x] == 3) {
                fruits[x].src = "/kuvat/kirsikka.png";}
            else if(numero[x] == 4) {
                fruits[x].src = "/kuvat/vesimelooni.png";}
            else {
                fruits[x].src = "/kuvat/vesimelooni.png";}}
}}

/* Locking number */
function locking1() {
    locking(x=0)
    }
function locking2() {
    locking(x=1)
    }
function locking3() {
    locking(x=2)
    }
function locking4() {
    locking(x=3)
    }

    function locking() {
        lockvalue[x] = numero[x];
        console.log(lockvalue[x]);
        console.log(lockvalue);
    }

function nimi() {
    pelaaja = prompt("Anna nimesi");
    nameblock.innerText += pelaaja;
    console.log(pelaaja);
}

function spin2() {
        numero = Array.from({length: 4}, () => Math.floor(Math.random() * 4 + 1));
        console.log(numero);
        screenupdate();
        imgupdate2();
}

function poggers() {
    if(lockvalue[0] && lockvalue[1] && lockvalue[2] && lockvalue[3] === 1) {
        console.log("1111! Poggers")}
    else if(lockvalue[0] && lockvalue[1] && lockvalue[2] && lockvalue[3] === 2) {
        console.log("2222! Poggers")}
    else if(lockvalue[0] && lockvalue[1] && lockvalue[2] && lockvalue[3] === 3) {
        console.log("3333! Poggers")}
    else if(lockvalue[0] && lockvalue[1] && lockvalue[2] && lockvalue[3] === 4) {
        console.log("4444! Poggers")}
    else {console.log("mitä vittua")}
}

/* Betting functions */
function e1() {
    if(saldo > 0) {
    saldo -= 1
    bet += 1;
    console.log(bet);
    screenupdate();}
    else {alert("Sinulla ei ole tarpeeksi rahaa");}
}

function e2() {
    if(saldo > 1 ) {
    bet += 2;
    console.log(bet);
    screenupdate();}
    else {alert("Sinulla ei ole tarpeeksi rahaa");}
}

function turn() {
    if(bet > 0) {
        spin2();
        poggers();
        bet = 0;
        screenupdate;}
    else {
        alert("et ole laittanut yhtään panosta")}
}

function reset() {
    saldo += bet
    bet = 0
    screenupdate()
}
