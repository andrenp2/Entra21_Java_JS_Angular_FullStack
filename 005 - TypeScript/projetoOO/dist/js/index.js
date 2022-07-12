"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    // Construtor
    constructor(idade, dia, mes, ano, nome) {
        this.idade = idade;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.nome = nome;
    }
    // Metodos:
    // tambem chamado de Metodo de Trabalho
    calculaIdade(diaHj, mesHj, anoHj) {
        /*let data = new Date();

        let d = data.getDate();
        let m = data.getMonth() + 1;
        let a = data.getFullYear();

        let totalDiasAtual = d + ( m * 30 ) + ( a * 365);
        let totalDiasPessoa = this.dia + (this.mes * 30) + (this.ano * 365);

        let idadeCalculada = Number(((totalDiasAtual - totalDiasPessoa ) / 365 ).toFixed(0));

        this.idade = idadeCalculada;
        */
        let diaAtual = new Date(`${diaHj}/${mesHj}/${anoHj} 00:00:00`);
        let diaNasc = new Date(`${this.dia}/${this.mes}/${this.ano} 00:00:00`);
        this.idade = Number(((((((diaAtual.valueOf() - diaNasc.valueOf()) / 1000) / 60) / 60) / 24) / 365));
    }
    getIdade() {
        return this.idade;
    }
    getNome() {
        return this.nome;
    }
    setDataDeNascimento(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
exports.Pessoas = Pessoas;
