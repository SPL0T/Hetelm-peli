var f1 = document.querySelector("#f1");
var f2 = document.querySelector("#f2");
var f3 = document.querySelector("#f3");
var f4 = document.querySelector("#f4");
var nameblock = document.querySelector("#name");
let playerName= "";
let numero1 = "";
let numero2 = "";
let numero3 = "";
let numero4 = "";
let points = "50";
var pelaaja ="";

function nimi() {
    pelaaja = prompt("Anna nimesi");
    nameblock.innerText = "Pelaaja: " + pelaaja;
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

function pistelaskuri() {

}