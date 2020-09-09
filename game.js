var f1 = document.querySelector("#f1");
var f2 = document.querySelector("#f2");
var f3 = document.querySelector("#f3");
var f4 = document.querySelector("#f4");
var nameblock = document.querySelector("#name");
var saldonaytto = document.querySelector("#saldo");
var panos = document.querySelector("#panos")

let playerName= "";
let numero1;
let numero2;
let numero3;
let numero4;
let saldo = "50";
var pelaaja ="";
saldonaytto.innerText = saldo;
let lockvalue1;
let lockvalue2;
let lockvalue3;
let lockvalue4;
let bet = panos.innerText;


function locking1() {
    if(numero1 != null) {
        lockvalue1 = numero1}
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
        lockvalue3 = numero3}
    else {
        console.log("variable was either null or something else is shit")
    }}

function locking4() {
    if(numero4 != null) {
        lockvalue4 = numero4}
    else {
        console.log("variable was either null or something else is shit")
    }}

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
poggers()
}


function hedelma1() {
    numero1 = Math.floor((Math.random() * 4) + 1);
    console.log(numero1)
    f1.innerHTML = numero1;}

function hedelma2() {
    numero2 = Math.floor((Math.random() * 4) + 1);
    console.log(numero2)
    f2.innerHTML = numero2;}

function hedelma3() {
    numero3 = Math.floor((Math.random() * 4) + 1);
    console.log(numero3)
    f3.innerHTML = numero3;}

function hedelma4() {
    numero4 = Math.floor((Math.random() * 4) + 1);
    console.log(numero4)
    f4.innerHTML = numero4;}

function poggers() {
    if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 1) {
        console.log("1111! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 2) {
        console.log("2222! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 3) {
        console.log("3333! Poggers")}
    else if(lockvalue1 && lockvalue2 && lockvalue3 && lockvalue4 === 4) {
        console.log("4444! Poggers")}
}