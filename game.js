const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const nameblock = document.querySelector("#name");
const saldonaytto = document.querySelector("#saldo");
const panos = document.querySelector("#panos");
const vpanos = document.querySelector("#vpanos");
const vvoitto = document.querySelector("#vvoitto");
const mvoitto = document.querySelector("#mvoitto");

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
let lwin = 0;
let mwin = 0;
screenupdate();

/*
Screen Update Functions
*/
function screenupdate() {
    panos.innerText = bet;
    saldonaytto.innerText = saldo;
    vpanos.innerText = lbet;
    vvoitto.innerText = lwin
    mvoitto.innerText = mwin
    imgupdate2();
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

/* 
Name
*/
function nimi() {
    pelaaja = prompt("Anna nimesi");
    nameblock.innerText += pelaaja;
}

/*
Betting functions
*/
function e1() {
    if(saldo > 0 && turn == 1) {
    saldo -= 1
    bet += 1;
    screenupdate();}
    else if(turn == 1){
        alert("Sinulla ei ole tarpeeksi rahaa");}
    else{
        alert("et voi laittaa rahaa muuta kuin pelin alussa")
}}

function e2() {
    if(saldo > 1 && turn == 1) {
    saldo -= 2;
    bet += 2;
    screenupdate();}
    else if(turn == 1){
        alert("Sinulla ei ole tarpeeksi rahaa");}
    else{
        alert("et voi laittaa rahaa muuta kuin pelin alussa")
}}

function reset() {
    if(turn == 1) {
    saldo += bet
    bet = 0
    screenupdate()}
    else{
        alert("et voi ottaa panostasi kesken pelin")
    }}

/* Checks if you have money */
function moneycheck() {
    if(turn == 1 && bet > 0) {
        game();
    }
    else if(turn == 1 && bet <= 0) {
        alert("et ole laittanut yhtään panosta");
    }
    else {
        game();
    }
}

/*
Locking number
*/
    function locking() {
        lockvalue[x] = numero[x];
    }

/* Spin the rollers */
function spin() {
        numero = Array.from({length: 4}, () => Math.floor(Math.random() * 4 + 1));
        screenupdate();
}

/* puts roller numbers to locking array if that spot isn't locked so you can see final numbers */
function fcheck() {
    for(x=0; x < 4; x++) {
        if(lockvalue[x] == 0){
            lockvalue[x] = numero[x];
        }}}

/* Clears locking array for next turn */
function clrlock() {
    for(x=0; x < 4; x++) {
        (lockvalue[x] != 0)
        lockvalue[x] = 0;      
    }
}

/* Functions so tha game knows what's going on */
function game() {
    if(turn == 1) {
        clrlock();
        turn = 2;
        spin();
        screenupdate();
    }
    else if(turn == 2) {
        spin();
        screenupdate();
        turn = 1;
        fcheck();
        wcheck();
        lbet = bet;
        bet = 0;
        maxwin();
        screenupdate();
    }}

/* Checks if you've won something */
function wcheck() {
    if(lockvalue[0] === 1 && lockvalue[1] === 1 && lockvalue[2] === 1 && lockvalue[3] === 1) {
        saldo += bet * 2;
        lwin = bet * 2;}
    else if(lockvalue[0] === 2 && lockvalue[1] === 2 && lockvalue[2] === 2 && lockvalue[3] === 2) {
        saldo += bet * 4;
        lwin = bet * 4;}
    else if(lockvalue[0] === 3 && lockvalue[1]  === 3&& lockvalue[2] === 3 && lockvalue[3] === 3) {
        saldo += bet * 6;
        lwin = bet * 6;}
    else if(lockvalue[0] === 4 && lockvalue[1] === 4 && lockvalue[2] === 4 && lockvalue[3] === 4) {
        saldo += bet * 8;
        lwin = bet * 8;}
    }

/* puts max win on the infoboard */
function maxwin(){
    if(lwin > mwin){
        mwin = lwin
    }
}