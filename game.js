const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const nameblock = document.querySelector("#name");
const saldonaytto = document.querySelector("#saldo");
const panos = document.querySelector("#panos");

let fruits = [f1, f2, f3, f4];
let playerName= "";
let numero = 0;
let saldo = 50;
let pelaaja ="";
let lockvalue = [4, 4, 4, 4];
let bet = 0;
let x;
screenupdate();

/* Screen Update Function */
function screenupdate() {
    panos.innerText = bet;
    saldonaytto.innerText = saldo;
    /* Temporary */
    f3.innerHTML = numero[2];
    f4.innerHTML = numero[3];
}

function imgupdate2(){
    for(x=0; x < 4; x++) {
    if(numero[x] == 1) {
        fruits[x].src = "/kuvat/omena.png";}
    else if(numero[x] == 2) {
        fruits[x].src = "/kuvat/paaryna.png";}
    else if(numero[x] == 3) {
        fruits[x].src = "/kuvat/kirsikka.png";}
    else if(numero[x] == 4) {
        fruits[x].src = "/kuvat/vesimelooni.png";}
    else {
        fruits[x].src = "/kuvat/vesimelooni.png";}
}}

function locking1() {
    if(numero[0] != null) {
        lockvalue[0] = numero[0]}
    else {
        console.log("variable was either null or something else is shit")
    }}

function locking2() {
    if(numero2 != null) {
        lockvalue2 = numero2}
    else {
        console.log("variable was either null or something else is shit")
    }}


function locking3() {
    if(numero3 != null) {
        lockvalue3 = numero3;}
    else {
        console.log("variable was either null or something else is shit");
    }}

function locking4() {
    if(numero4 != null) {;
        lockvalue4 = numero4;}
    else {
        console.log("variable was either null or something else is shit");
    }}

function nimi() {
    pelaaja = prompt("Anna nimesi");
    nameblock.innerText += pelaaja;
    console.log(pelaaja);
}
function spin2() {
        numero = Array.from({length: 4}, () => Math.floor(Math.random() * 4 + 1));
        console.log(numero);
        console.log(numero[3]);
        screenupdate();
        imgupdate2();
}

function poggers() {
    if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 1) {
        console.log("1111! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 2) {
        console.log("2222! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 3) {
        console.log("3333! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 4) {
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
    saldo -= 2;
    bet += 2;
    console.log(bet);
    screenupdate();}
    else {alert("Sinulla ei ole tarpeeksi rahaa");}
}

function reset() {
    saldo += bet
    bet = 0
    screenupdate()
}
