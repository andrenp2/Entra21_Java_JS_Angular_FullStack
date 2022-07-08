// O modulo express retornar uma funcao que instancia o express
const express = require("express")
const cors = require("cors")

// A funcao express cria uma instancia de todo o framework express em app
const app = express()

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")

    app.use(cors())


    next()
})


const porta = 3001

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/hora", function(req, resp){

    let horaCerta = new Date()
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Hora Certa ${horaCerta.getDate()} </h1>
                </body>
            </html>
        `
    )
})
