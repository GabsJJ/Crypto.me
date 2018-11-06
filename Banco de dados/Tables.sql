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
insert into CriptoCategorias values(1, 'Simples'  , 'Criptografias mais fáceis de entender, compostas de algoritmos de poucas etapas')
insert into CriptoCategorias values(2, 'Complexas', 'Criptografias mais complexas de entender, compostas de algoritmos de várias etapas')
insert into CriptoCategorias values(3, 'Mistas'   , 'Criptografias que são compostas por outras criptografias e misturadas com outros algoritmos')

--Criptografias
insert into Criptografia values(1, 'A1Z26','Essa é uma criptografia simples onde será apenas usada números, sem necessidade de contas complexas.',
'Cada letra será substituida pelo número da sua posição no alfabeto. Para que os números não se misturem, se usa "-" entre cada letra e um espaço
entre cada palavra. Acentos não são usados e não há diferença entre letras maiúsculas e minúsculas.',2,1)

insert into Criptografia values(2,'Cifra de César','Esta é uma das mais antigas e mais simples forma de criptografia existente.',
'A Cifra de César consiste basicamente em um processo de substituição com base em um número que indica quantas posições o alfabeto original
vai se deslocar. Um exemplo, se esse número for igual a 3, o alfabeto vai se deslocar em 3 posições, ou seja, a letra A passa a ser D, B passa
a ser E, e assim por diante.',1,2)

insert into Criptografia values(3,'Combined Cipher','Esta criptografia é uma mistura de A1Z26 com Cifra de Cesar na rotação nº 22.',
'Para utilizar o Combined Cipher deve-se primeiro criptografar a mensagem com Cifra de Cesar na rotação nº 22, depois criptografar
o resultado com A1Z26. Ambas essas criptografias estão explicados nesse mesmo site.',1,3)

insert into Criptografia values(4,'Binário','Essa é uma forma de criptografia na qual se substitui a base de um número decimal de 10 para 2',
'Nâo é muito usada como criptografia, já que é, de certa forma, uma línguagem que os computadores 
utilizam para se "comunicar"; porém, nada impede que seja usada com criptografia. Para converter um número para binário, primeiro, faça uma 
divisão inteira por 2 (Ex 25 / 2 = 12), segundo, pegue o resto da divisão do numero por 2 (Ex: 25 % 2 = 1) e guarde-o em algum lugar. 
E para o quarto passo, basta repetir esse processo com o resultado que foi encontrado na divisão inteira até que este seja igual = 1. 
Depois disso, você terá de juntar todos os restos e ordená-los de trás pra frente. Para um exemplo em vídeo, <a href="https://www.youtube.com/watch?v=mttrG_kbHN4">Clique aqui.</a>
<img src="imagens/dPb.jpg">
<p><b>Dica:</b></p> Para converter letras para binário, pesquise sobre a <a href="https://pt.wikipedia.org/wiki/ASCII">Tabela ASCII</a>',
3,2)

update Criptografia set explicacao = 'A Cifra de César consiste basicamente em um processo de substituição com base em um número que indica quantas posições o alfabeto original
vai se deslocar. Um exemplo, se esse número for igual a 3, o alfabeto vai se deslocar em 3 posições, ou seja, a letra A passa a ser D, B passa
a ser E, e assim por diante.
<p><b>Exemplo da troca de alfabetos: </b></p>
<img src="imagens/caesar.png">'
where id = 2

select * from Criptografia

--Quiz
insert into Quiz values(1,'Criptografe "Ola mundo" usando A1Z26', '15-12-1 13-21-14-4-15')
insert into Quiz values(2,'Descriptografe "3-18-9-16-20-15-7-18-1-6-9-1" usando A1Z26', 'Criptografia')
insert into Quiz values(3,'Criptografe "Julio Cesar" usando a Cifra de Cesar com a rotação nº13', 'WHYVB PRFNE')
insert into Quiz values(9,'Criptografe o número 25 usando o sistema Binário','11001')
insert into Quiz values(10,'Descriptografe "01001111 01001100 01000001" no sistema Binário','OLA')

select * from Usuario

select * from Quiz