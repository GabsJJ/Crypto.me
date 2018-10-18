var todasQuestoes = new Array();
var questoes = new Array();
const tamanho = 3;
const qtdQuestoes = 3;

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
    
    for(i = 0; i < arr.length; i++)
    {
    	todasQuestoes[i] = arr[i];
    }

    SelecionarQuestoes();

}

function SelecionarQuestoes()
{
	for(i = 0; i < tamanho; i++)
	{
		var indice = -1;
		do
		{
			indice = Math.floor(Math.random() * qtdQuestoes);

			for(a = 0; a < questoes.length; a++)
				if(indice + 1 == questoes[a].id)
				{
					indice = -1;
				}
		}
		while(indice < 0)

		questoes[i] = todasQuestoes[indice];
	}

	MostrarQuestoes();
}

function MostrarQuestoes()
{
	for(i = 0; i < tamanho; i++)
	{
		var oId = "l" + (i + 1);
		document.getElementById(oId).innerHTML = questoes[i].questao;
	}
}