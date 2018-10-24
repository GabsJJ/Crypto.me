//Pegando informações do banco e mostrando-as
/*
function PegarBanco() 
{
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/Quiz";

    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
            PegarQuestoes(this.responseText);
        }
    }
    	xmlhttp.open("GET", url, true);

    xmlhttp.send();
}


function PegarQuestoes(response) 
{
    var arr = JSON.parse(response);

}
*/

function VerficarCampos()
{
	//Verificar senha
	var s1 = document.getElementById("passwordR");
	var s2 = document.getElementById("passwordRR");

	if(s1.value != s2.value)
		alert("Senhas não são iguais!");
	else
		if(s1.value == "")
			alert("Por favor, insira uma senha!");
}