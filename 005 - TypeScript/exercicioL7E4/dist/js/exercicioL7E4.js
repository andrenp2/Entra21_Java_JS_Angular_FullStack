"use strict";
// escrever arquivo js em TS
//declarando variaveis
let temperaturas = [];
const dias = 30;
let media = 0;
let contaTemp = 0;
let somaTemp = 0;
let dia = 0;
// adicionando os botoes para futuros eventos
let btSalvar = document.getElementById("idButton1");
let btBuscar = document.getElementById("idButton2");
// declarando htmls
let campoTemp = document.getElementById('idTemp');
let campoDia = document.getElementById('idDia');
let out1 = document.getElementById('idOut1');
let out2 = document.getElementById('idOut3');
let out3 = document.getElementById('idOut3');
btSalvar.onclick = function () {
    salvarTemp();
};
btBuscar.onclick = function () {
    buscarDia();
};
function salvarTemp() {
    contaTemp++;
    if (contaTemp == 30) {
        campoTemp.disabled = true;
        btSalvar.disabled = true;
    }
    var temp = Number(campoTemp.value);
    temperaturas.push(temp);
    campoTemp.value = "";
    out1.value = "entradas digitadas : " + contaTemp;
    somaTemp = somaTemp + temp;
    media = somaTemp / contaTemp;
    out2.value = "Media temperaturas : " + media.toFixed(2);
}
function buscarDia() {
    dia = Number(campoDia.value);
    for (let i = 1; i < temperaturas.length + 1; i++) {
        if (i == dia) {
            if (temperaturas[i] >= media) {
                out3.value = "Temperatura do dia " + dia + " [" + temperaturas[i] + "º] está acima da média. ";
            }
            else {
                out3.value = "Temperatura do dia " + dia + " [" + temperaturas[i] + "º] está abaixo da média. ";
            }
        }
    }
}
