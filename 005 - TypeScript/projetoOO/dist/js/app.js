"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
var eistein = new index_js_1.Pessoas(0, 14, 3, 1879, 'Eistein');
eistein.calculaIdade(11, 7, 2022); // recebe hoje
console.log("Idade de " + eistein.getNome() + " é " + eistein.getIdade());
