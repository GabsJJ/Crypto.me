const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; //porta padrão
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=PR118196;User Id=PR118196;Password=PR118196;";

//conexao com BD
sql.connect(conexaoStr)
   .then(conexao => global.conexao = conexao)
   .catch(erro => console.log(erro));

// configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//definindo as rotas
const rota = express.Router();
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

//inicia servidor
app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
	global.conexao.request()
		.query(sql)
		.then(resultado => resposta.json(resultado.recordset))
		.catch(erro => resposta.json(erro));
}

rota.get('/Quiz', (requisicao, resposta) =>{
execSQL('SELECT * FROM Quiz', resposta);
})

rota.get('/QUsuario', (requisicao, resposta) =>{
execSQL('SELECT * FROM Usuario', resposta);
})

rota.get('/Usuario/:email', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.email)
filtro = ' WHERE email=' + requisicao.params.email;
execSQL('SELECT * from Usuario' + filtro, resposta);
})

rota.post('/Usuario', (requisicao, resposta) => {
const e = requisicao.body.nEmail.substring(0,254);
const u = requisicao.body.nUser.substring(0,50);
const s = requisicao.body.nSenha.substring(0,50);
console.log(e, u, s);
execSQL(`INSERT INTO Usuario(email, username, senha) VALUES('${e}','${u}','${s}')`,resposta);
})

rota.get('/CriptoCategorias', (requisicao, resposta) =>{
execSQL('SELECT * FROM CriptoCategorias', resposta);
})

rota.get('/Criptografia/:idCategoria', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.idCategoria)
filtro = ' WHERE idCategoria=' + requisicao.params.idCategoria;
execSQL('SELECT * from Criptografia' + filtro, resposta);
})

rota.get('/QCriptografia/:id', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
filtro = ' WHERE id=' + requisicao.params.id;
execSQL('SELECT * from Criptografia' + filtro, resposta);
})

rota.post('/Acesso', (requisicao, resposta) => {
const e = requisicao.body.nEmail.substring(0,254);
const u = requisicao.body.nUser.substring(0,50);
const s = requisicao.body.nSenha.substring(0,50);
console.log(e, u, s);
execSQL(`INSERT INTO Acesso(email, username, senha) VALUES('${e}','${u}','${s}')`,resposta);
})