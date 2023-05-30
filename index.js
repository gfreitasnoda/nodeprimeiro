//Importação do modulo express
const express =  require("express");

//Instanciando o express como app
const app = express();

//Definir que o express deve lidar com conteudos em json
/* 
*JSON -> JS(Java Script) O(On) N(Notation)
    é uma notação em javascript,ou seja, uma forma estrurada
    de transitar com os dados, enviando para o servidor ou para 
    o usuário. É uma forma de trocar dados entre cliente-servidor
    usando objetos javascript.Ex.:
        lstProdutos:[
            {
                id:51,
                nome:"Mesa de sinuca do flamengo"
            },
            {
                id:52,
                nome:"Sofá"
            }
        ]
*/
app.use(express.json());
app.use(coletarDados);//usando o middleware

//vamos criar a primeira rota com a solicitação get
app.get("/",(req,res)=>{
    //responder ao usuário passando o status code
    //e a mensagem
    res.status(200).send("Olá você está na rota raíz")
});

app.get("/clientes/listar",(req,res)=>{
    console.log(req);
    res.status(200).send(["Mario", "Cleber", "Josefina"]);
});
app.post("/clientes/cadastrar",(req,res)=>{
    console.log(req);
    res.status(201).send({rs:"Veja os dados enviados",dados:req.body});
});

function coletarDados(req,res,next){
    console.log(req);
    next();
}


app.listen(5050,()=>console.log("http://127.0.0.1:5050"));