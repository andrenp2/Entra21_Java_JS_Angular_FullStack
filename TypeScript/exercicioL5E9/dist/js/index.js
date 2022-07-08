"use strict";
console.log('olha typescript');
// tipos primitivos
// string, boolean, number...
let idade;
var nome = "Joao";
idade = 10;
const isAluno = true;
// Tipos Object
// Array
const idades = [10, 14, 20, 5, 24];
console.log(idades);
console.log(typeof (idades));
console.log(idades.length);
idades.push(23);
//console.log(idades.toUpperCase()); <-- gera erro de compilacao
//tupla (tuple)
let minhaTupla;
minhaTupla = [12, "Mariana", ["a", "b", "c"]];
// Objetos literais (Object Literals)
const user = {
    nome: "Joana",
    idade: 18
};
console.log(user);
// Tipo Any
let varA = 0;
varA = "Oi";
varA = true;
varA = [];
// Union Type
var id;
id = "20";
id = 20;
var userId;
userId = 10;
userId = "10";
// Funcoes
// Tipagens de parametros
function soma(num1, num2) {
    return num1 + num2;
}
// tipagem do retorno
function digaOla(nome) {
    return "ola" + nome;
}
console.log(soma(2, 3));
console.log(digaOla("Fulano"));
// funcao sem retorno (void)
function gravarLog(msn) {
    console.log(msn);
}
// funcoes com parametros opcionais
function saudar(nome, saudacao) {
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
    }
    else {
        console.log(`Olá ${nome}`);
    }
}
saudar("Fulano", "Sr.");
saudar("Joana");
var xpto = document.getElementById("idIn");
console.log(xpto.value);
