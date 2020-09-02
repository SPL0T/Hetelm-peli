var f1 = document.querySelector("#f1");
var f2 = document.querySelector("#f2");
var f3 = document.querySelector("#f3");
var f4 = document.querySelector("#f4");
var nameblock = document.querySelector("#name");
var saldonaytto = document.querySelector("#saldo");
var panos = document.querySelector("#panos")

let playerName= "";
let numero1 = "";
let numero2 = "";
let numero3 = "";
let numero4 = "";
let saldo = "50";
var pelaaja ="";
saldonaytto.innerText = saldo;
let lockvalue1 = "0";
let lockvalue2 = "0";
let lockvalue3 = "0";
let lockvalue4 = "0";
let bet = panos.innerText;


function locking1() {
    lockvalue1 = "1";
}

function locking2() {
    lockvalue2 = "1";
}

function locking3() {
    lockvalue3 = "1";
}

function locking4() {
    lockvalue4 = "1";
}

function nimi() {
    pelaaja = prompt("Anna nimesi");
    nameblock.innerText += pelaaja;
    console.log(pelaaja);
}

function spin() {
hedelma1()
hedelma2()
hedelma3()
hedelma4()
}


function hedelma1() {
    numero1 = Math.floor((Math.random() * 4) + 1);
    console.log(numero1)
    f1.innerHTML = numero1;}

function hedelma2() {
    numero1 = Math.floor((Math.random() * 4) + 1);
    console.log(numero1)
    f2.innerHTML = numero1;}

function hedelma3() {
    numero1 = Math.floor((Math.random() * 4) + 1);
    console.log(numero1)
    f3.innerHTML = numero1;}

function hedelma4() {
    numero1 = Math.floor((Math.random() * 4) + 1);
    console.log(numero1)
    f4.innerHTML = numero1;}
