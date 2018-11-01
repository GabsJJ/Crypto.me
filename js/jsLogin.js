var users = new Array();

function pegarUsers()
{
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/QUsuario";

    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
            guardarUsers(this.responseText);
        }
    }
        xmlhttp.open("GET", url, true);

    xmlhttp.send();
}

function guardarUsers(response)
{
    var arr = JSON.parse(response);

    for(i = 0; i < arr.length; i++)
        users[i] = arr[i];
}

//Criando uma conta
function VerficarCampos()
{
	//Verificar senha
	var s1 = document.getElementById("passwordR");
	var s2 = document.getElementById("passwordRR");

	if(s1.value != s2.value)
    {
		alert("Senhas não são iguais!");
        return false;
    }

    for(i = 0; i < users.length; i++)
        if(document.getElementById("email").value == users[i].email)
        {
            alert("Email já usado!");
            return false;
        }

    alert("Conta criada com sucesso!");
    pegarUsers();
    return true;
}

//Fazendo login
function verificarConta()
{
    var c1 = document.getElementById("emailS");
    var c2 = document.getElementById("password");
    var senha;
    var username;

    var achou = false;
    for(i = 0; i < users.length; i++)
        if(c1.value == users[i].email)
        {
            achou = true;
            senha = users[i].senha;
            username = username[i].username;
            break;
        }

    if(!achou)
    {
        alert("Email não registrado!");
        return false;
    }

    if(senha != c1.value)
    {
        alert("Senha inválida!")
        return false;
    }

    alert("Bem-vindo(a) " + username + "!");

    //inserir dados
    
    return true;
}