const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const nameblock = document.querySelector("#name");
const saldonaytto = document.querySelector("#saldo");
const panos = document.querySelector("#panos");
const vpanos = document.querySelector("#vpanos");

let fruits = [f1, f2, f3, f4];
let playerName= "";
let numero = [0, 0, 0, 0];
let saldo = 50;
let pelaaja ="";
let lockvalue = [0, 0, 0, 0];
let bet = 0;
let lbet = 0;
let x;
let turn = 1;
screenupdate();
imgupdate2();
/* Screen Update Function */
function screenupdate() {
    panos.innerText = bet;
    saldonaytto.innerText = saldo;
    vpanos.innerText = lbet;
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
}}

/* Locking number */
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

function spin() {
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
    else {}
}

/*
Betting functions
*/
function e1() {
    if(saldo > 0) {
    saldo -= 1
    bet += 1;
    screenupdate();}
    else {alert("Sinulla ei ole tarpeeksi rahaa");}
}

function e2() {
    if(saldo > 1 ) {
    saldo -= 2;
    bet += 2;
    screenupdate();}
    else {alert("Sinulla ei ole tarpeeksi rahaa");}
}

function reset() {
    saldo += bet
    bet = 0
    screenupdate()
}

function moneycheck() {
    if(turn == 1 && bet > 0) {
        game();
    }
    else if(turn == 1 && bet <= 0) {
        alert("et ole laittanut yhtään panosta");
    }
    else {
        game();
        console.log("else");
    }
}

function fcheck() {
    for(x=0; x < 4; x++) {
        if(lockvalue[x] == 0){
            lockvalue[x] = numero[x];
            console.log(lockvalue)
        }
        else {
            console.log("e toiminu")
        }
    }
}

function clrlock() {
    for(x=0; x < 4; x++) {
        if(lockvalue[x] != 0){
            lockvalue[x] = 0;
            console.log(lockvalue)
        }
        else {
            console.log("e toiminu2")
        }
    }
}

function game() {
    if(turn == 1) {
        lbet = bet;
        bet = 0;
        turn = 2;
        console.log(turn)
        spin();
        screenupdate;
        console.log("paska")
    }
    else if(turn == 2) {
        bet = 0;
        console.log(turn)
        spin();
        screenupdate;
        console.log("testi")
        turn = 1;
        console.log(turn)
        fcheck();
        poggers();
        clrlock();
    }
    else {
    console.log("vittu")
    screenupdate;}}
