// escrever arquivo js em TS

//declarando variaveis
let temperaturas: number[] = [];
const dias: number = 30;
let media: number = 0; 
let contaTemp: number = 0;
let somaTemp: number = 0;
let dia: number = 0;

// adicionando os botoes para futuros eventos

let btSalvar = document.getElementById("idButton1") as HTMLInputElement;
let btBuscar = document.getElementById("idButton2") as HTMLInputElement;

// declarando htmls
let campoTemp = document.getElementById('idTemp') as HTMLInputElement
let campoDia = document.getElementById('idDia') as HTMLInputElement
let out1 = document.getElementById('idOut1') as HTMLOutputElement
let out2 = document.getElementById('idOut3') as HTMLOutputElement
let out3 = document.getElementById('idOut3') as HTMLOutputElement

btSalvar.onclick = function(){
    salvarTemp();
}

btBuscar.onclick = function(){
    buscarDia();
}

function salvarTemp():void {

    contaTemp++

    if (contaTemp == 30){
        campoTemp.disabled = true
        btSalvar.disabled = true
    }

    var temp = Number(campoTemp.value);

    temperaturas.push(temp);

    campoTemp.value = "";
    
    out1.value = "entradas digitadas : " + contaTemp;

    somaTemp = somaTemp + temp

    media = somaTemp / contaTemp
    
    out2.value = "Media temperaturas : " + media.toFixed(2)   
    
}

function buscarDia(): void{

    dia = Number(campoDia.value);

    for (let i: number =1; i < temperaturas.length+1; i++){

        if (i == dia){
            if (temperaturas[i] >= media){
                out3.value = "Temperatura do dia " + dia + " [" + temperaturas[i] + "º] está acima da média. " 
            }else{
                out3.value = "Temperatura do dia " + dia + " [" + temperaturas[i] + "º] está abaixo da média. " 
            }
        }
    }

}