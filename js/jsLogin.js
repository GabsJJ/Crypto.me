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
    
    red2($('#f2'));
    window.location.href = "./principal.html"
}

//Fazendo login
function verificarConta()
{
    var c1 = document.getElementById("emailS");
    var c2 = document.getElementById("password");
    var s;
    var use;
    var idd;

    var achou = false;
    for(i = 0; i < users.length; i++)
    {
        if(c1.value == users[i].email)
        {
            achou = true;
            s = users[i].senha;
            use = users[i].username;
            idd = users[i].id;
            break;
        }
    }

    if(!achou)
    {
        alert("Email não registrado!");
        return false;
    }

    if(s + "" != c2.value + "")
    {
        alert("Senha inválida!")
        return false;
    }

    document.getElementById("id").value = idd + "";

    alert("Bem-vindo(a) " + use + "!");
    
    red1($('#f1'));
    window.location.href = "./principal.html"

}

//Redirecionando
function red1(form){
    $.post( "http://localhost:3000/Acesso", form.serialize() ).done(function(data){
        if (!data.erro) {
            form.each(function(data){
            });
        }
    });
};

function red2(form){
    $.post( "http://localhost:3000/Usuario", form.serialize() ).done(function(data){
        if (!data.erro) {
            form.each(function(data){
            });
        }
    });
};