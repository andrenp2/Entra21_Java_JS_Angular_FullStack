export class Pessoas{

// Atributos

    private idade: number;
    private dia: number;
    private mes: number;
    private ano: number;
    private nome: string;

// Construtor

    public constructor(idade: number, dia: number, mes: number, ano: number, nome: string){

        this.idade = idade;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.nome = nome;

    }

// Metodos:

    // tambem chamado de Metodo de Trabalho
    public calculaIdade(diaHj: number, mesHj: number, anoHj: number): void{

        /*let data = new Date();

        let d = data.getDate();
        let m = data.getMonth() + 1;
        let a = data.getFullYear();

        let totalDiasAtual = d + ( m * 30 ) + ( a * 365);
        let totalDiasPessoa = this.dia + (this.mes * 30) + (this.ano * 365);

        let idadeCalculada = Number(((totalDiasAtual - totalDiasPessoa ) / 365 ).toFixed(0));

        this.idade = idadeCalculada;
        */

        let diaAtual: Date = new Date(`${diaHj}/${mesHj}/${anoHj} 00:00:00`)
        let diaNasc: Date = new Date(`${this.dia}/${this.mes}/${this.ano} 00:00:00`)

        this.idade = Number(((((((diaAtual.valueOf() - diaNasc.valueOf())/1000)/60)/60)/24)/365));

    }

    public getIdade(): number{
        return this.idade;
    }

    public getNome(): string{
        return this.nome;
    }

    public setDataDeNascimento(dia: number, mes: number, ano: number): void{
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

}
