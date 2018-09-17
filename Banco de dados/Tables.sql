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

create table acesso(
idAcesso int primary key,
idUsuario int not null,
dataAcesso date not null,
horaAcesso time not null
)

create table quiz(
id int primary key,
questao varchar(200) not null,
alternativas varchar(200) not null,
resposta varchar(200) not null
)