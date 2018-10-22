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

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/Quiz/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.codMedico)
filtro = ' WHERE id=' + parseInt(requisicao.params.id);
execSQL('SELECT * from Quiz' + filtro, resposta);
})

/*
rota.post('/Quiz', (requisicao, resposta) =>{
const id = parseInt(requisicao.body.id);   //É o nome do campo, não o ID!
const n = requisicao.body.nome.substring(0,30);
const c = requisicao.body.crm.substring(0,10);
console.log(id, n, c);
execSQL(`INSERT INTO MedicoBD2(codMedico, nome, crm) VALUES(${id},'${n}','${c}')`,resposta);
})
*/