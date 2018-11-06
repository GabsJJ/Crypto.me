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

select * from Criptografia

--Quiz
insert into Quiz values(1,'Criptografe "Ola mundo" usando A1Z26', '15-12-1 13-21-14-4-15')
insert into Quiz values(2,'Descriptografe "3-18-9-16-20-15-7-18-1-6-9-1" usando A1Z26', 'Criptografia')
insert into Quiz values(3,'Criptografe "Julio Cesar" usando a Cifra de Cesar com a rota��o n�13', 'WHYVB PRFNE')

select * from Usuario

select * from Quiz