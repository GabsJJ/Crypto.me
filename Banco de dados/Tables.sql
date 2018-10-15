--Criando as tabelas
create table Usuario(
email varchar(254) primary key,
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
idAcesso int primary key,
idUsuario int not null,
dataAcesso date not null,
horaAcesso time not null
)

create table Quiz(
id int primary key,
questao varchar(200) not null,
resposta varchar(200) not null
)

--Colocando dodos
--Categorias
insert into CriptoCategorias values(1, 'Simples'  , 'Criptografias mais fáceis de entender, compostas de algoritmos de poucas etapas')
insert into CriptoCategorias values(2, 'Complexas', 'Criptografias mais complexas de entender, compostas de algoritmos de várias etapas')
insert into CriptoCategorias values(3, 'Mistas'   , 'Criptografias que são compostas por outras criptografias e misturadas com outros algoritmos')

--Criptografias
insert into Criptografia values(1, 'A1Z26','Essa é uma criptografia simples onde será apenas usada números, sem necessidade de contas complexas',
'Cada letra será substituida pelo número da sua posição no alfabeto. Para que os números não se misturem, se usa "-" entre cada letra e um espaço
entre cada palavra. Acentos não são usados e não há diferença entre letras maiúsculas e minúsculas',2,1)

--Quiz
insert into quiz values(1,'Criptografe "Ola mundo" usando A1Z26', '15-12-1 13-21-14-4-15')
insert into quiz values(2,'Descriptografe "3-18-9-16-20-15-7-18-1-6-9-1" usando A1Z26', 'Criptografia')