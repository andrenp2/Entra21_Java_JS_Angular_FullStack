import { Pessoas } from "./index.js";

var eistein = new Pessoas(0,14, 3, 1879, 'Eistein');

eistein.calculaIdade(11,7,2022); // recebe hoje
console.log("Idade de " + eistein.getNome() + " é " + eistein.getIdade());

