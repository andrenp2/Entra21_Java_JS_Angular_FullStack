console.log('olha typescript');

// tipos primitivos
// string, boolean, number...

let idade: number;
var nome: string = "Joao"

idade = 10;

const isAluno: boolean = true;

// Tipos Object
// Array

const idades: number[] = [10, 14, 20, 5, 24];

console.log(idades);
console.log(typeof(idades));
console.log(idades.length);
idades.push(23)
//console.log(idades.toUpperCase()); <-- gera erro de compilacao

//tupla (tuple)
let minhaTupla: [number, string, string[]];

minhaTupla = [12, "Mariana", ["a","b","c"]];

// Objetos literais (Object Literals)

const user: {nome: string; idade: number} = {
    nome: "Joana",
    idade: 18
}

console.log(user);

// Tipo Any
let varA: any = 0;

varA = "Oi";

varA = true;

varA = [];

// Union Type
var id: string | number;

id = "20";
id = 20;

// TypeAlias 
type userIdType = string | number;

var userId: userIdType;

userId = 10;
userId = "10";

// Funcoes
// Tipagens de parametros
function soma(num1: number, num2: number){
    return num1 + num2;
}

// tipagem do retorno
function digaOla(nome: string): string{
    return "ola" + nome;
}

console.log(soma(2,3));


console.log(digaOla("Fulano"));

// funcao sem retorno (void)
function gravarLog(msn: string): void{
    console.log(msn)
}

// funcoes com parametros opcionais
function saudar(nome: string, saudacao?: string):void {

    if(saudacao){
        console.log(`Olá ${saudacao} ${nome}`);
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudar("Fulano", "Sr.")
saudar("Joana")

var xpto = document.getElementById("idIn") as HTMLInputElement;
console.log(xpto.value);




