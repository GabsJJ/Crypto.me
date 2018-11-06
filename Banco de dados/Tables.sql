--Criando as tabelas
create table Usuario(
id int identity(1,1) primary key,
email varchar(254) not null,
username varchar(50) not null,
senha varchar(50) not null
)

create table CriptoCategorias(
id int primary key,
nome varchar(50) not null,
descricao ntext not null
)

create table Criptografia(
id int primary key,
nome varchar(50) not null,
descricao ntext not null,
explicacao ntext not null,
dificuldade int not null,
idCategoria int not null,
constraint fkCategoria foreign key(idCategoria) references CriptoCategorias(id)
)

create table Acesso(
id int identity(1,1) primary key,
idUsuario int not null,
dataAcesso varchar(10) not null,
horaAcesso varchar(2) not null
)

create table Quiz(
id int primary key,
questao varchar(200) not null,
resposta varchar(200) not null
)

--Colocando dodos
--Categorias
insert into CriptoCategorias values(1, 'Simples'  , 'Criptografias mais f�ceis de entender, compostas de algoritmos de poucas etapas')
insert into CriptoCategorias values(2, 'Complexas', 'Criptografias mais complexas de entender, compostas de algoritmos de v�rias etapas')
insert into CriptoCategorias values(3, 'Mistas'   , 'Criptografias que s�o compostas por outras criptografias e misturadas com outros algoritmos')

--Criptografias
insert into Criptografia values(1, 'A1Z26','Essa � uma criptografia simples onde ser� apenas usada n�meros, sem necessidade de contas complexas.',
'Cada letra ser� substituida pelo n�mero da sua posi��o no alfabeto. Para que os n�meros n�o se misturem, se usa "-" entre cada letra e um espa�o
entre cada palavra. Acentos n�o s�o usados e n�o h� diferen�a entre letras mai�sculas e min�sculas.',2,1)

insert into Criptografia values(2,'Cifra de C�sar','Esta � uma das mais antigas e mais simples forma de criptografia existente.',
'A Cifra de C�sar consiste basicamente em um processo de substitui��o com base em um n�mero que indica quantas posi��es o alfabeto original
vai se deslocar. Um exemplo, se esse n�mero for igual a 3, o alfabeto vai se deslocar em 3 posi��es, ou seja, a letra A passa a ser D, B passa
a ser E, e assim por diante.',1,2)

insert into Criptografia values(3,'Combined Cipher','Esta criptografia � uma mistura de A1Z26 com Cifra de Cesar na rota��o n� 22.',
'Para utilizar o Combined Cipher deve-se primeiro criptografar a mensagem com Cifra de Cesar na rota��o n� 22, depois criptografar
o resultado com A1Z26. Ambas essas criptografias est�o explicados nesse mesmo site.',1,3)

insert into Criptografia values(4,'Bin�rio','Essa � uma forma de criptografia na qual se substitui a base de um n�mero decimal de 10 para 2',
'N�o � muito usada como criptografia, j� que �, de certa forma, uma l�nguagem que os computadores 
utilizam para se "comunicar"; por�m, nada impede que seja usada com criptografia. Para converter um n�mero para bin�rio, primeiro, fa�a uma 
divis�o inteira por 2 (Ex 25 / 2 = 12), segundo, pegue o resto da divis�o do numero por 2 (Ex: 25 % 2 = 1) e guarde-o em algum lugar. 
E para o quarto passo, basta repetir esse processo com o resultado que foi encontrado na divis�o inteira at� que este seja igual = 1. 
Depois disso, voc� ter� de juntar todos os restos e orden�-los de tr�s pra frente. Para um exemplo em v�deo, <a href="https://www.youtube.com/watch?v=mttrG_kbHN4">Clique aqui.</a>
<img src="imagens/dPb.jpg">
<p><b>Dica:</b></p> Para converter letras para bin�rio, pesquise sobre a <a href="https://pt.wikipedia.org/wiki/ASCII">Tabela ASCII</a>',
3,2)

update Criptografia set explicacao = 'A Cifra de C�sar consiste basicamente em um processo de substitui��o com base em um n�mero que indica quantas posi��es o alfabeto original
vai se deslocar. Um exemplo, se esse n�mero for igual a 3, o alfabeto vai se deslocar em 3 posi��es, ou seja, a letra A passa a ser D, B passa
a ser E, e assim por diante.
<p><b>Exemplo da troca de alfabetos: </b></p>
<img src="imagens/caesar.png">'
where id = 2

select * from Criptografia

--Quiz
insert into Quiz values(1,'Criptografe "Ola mundo" usando A1Z26', '15-12-1 13-21-14-4-15')
insert into Quiz values(2,'Descriptografe "3-18-9-16-20-15-7-18-1-6-9-1" usando A1Z26', 'Criptografia')
insert into Quiz values(3,'Criptografe "Julio Cesar" usando a Cifra de Cesar com a rota��o n�13', 'WHYVB PRFNE')
insert into Quiz values(9,'Criptografe o n�mero 25 usando o sistema Bin�rio','11001')
insert into Quiz values(10,'Descriptografe "01001111 01001100 01000001" no sistema Bin�rio','OLA')

select * from Usuario

select * from Quiz