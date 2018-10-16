/* Alfabeto */
var alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"
          , "T", "U", "V", "W", "X", "Y", "Z"]; 

function criptografar(mensagem, idCripto)
{
    mensagem = mensagem.toUpperCase();
    var nMensagem = "";
    
    switch(idCripto)
    {
        case "1":
            nMensagem = cA1Z26(mensagem);
            break;

        case "2":
            nMensagem = caesar(mensagem);
            break;
            
        default:
            nMensagem = mensagem;
            break;
    }
    
    return nMensagem;
}

function descriptografar(mensagem, idCripto)
{
    mensagem = mensagem.toUpperCase();
    var nMensagem = "";
    
    switch(idCripto)
    {
        case "1":
            nMensagem = DEScA1Z26(mensagem);
            break;

        case "2":
            nMensagem = DEScaesar(mensagem);
            break;
            
        default:
            nMensagem = mensagem;
            break;
    }
    
    return nMensagem;
}

/*Criptografa*/
function caesar(mensagem)
{
    var input = mensagem;
    var chave = parseInt(document.getElementById('txtChave').value);
    var outText = "";
    var sinal = 1;

    var tamanho = input.length;
    var indiceDaLetraAtual;
    outText = "";
    var i = 0;
    
    while(i < tamanho){ 
      if(alf.includes(input.substring(i,(i+1)))) //Verifica se o caractere esta dentro do vetor alfabeto
      {
          indiceDaLetraAtual = alf.indexOf(input.substring(i,(i+1)));
          outText += alf[(indiceDaLetraAtual + (chave * sinal)) % alf.length];
          i++;
      }
      else{
        if(input.substring(i,(i+1)) == " ")
        {
            outText += input.substring(i,(i+1));
            i++;
        }
        else
        {
            alert("Não inclua acentos nas letras!"); //Se o caractere não estiver no vetor 'alfabeto' ele dispara um alert apontando o erro
            outText = "";
            break;  
        }
      }
    }

    return outText;
}

/*Descriptografar*/
function DEScaesar(mensagem)
{
    var input = mensagem;
    var chave = parseInt(document.getElementById('txtChave').value);
    var outText = "";
    var sinal = -1;

    var tamanho = input.length;
    var indiceDaLetraAtual;
    var i = 0;
    
    while(i < tamanho){ 
      if(alf.includes(input.substring(i,(i+1)))) //Verifica se o caractere esta dentro do vetor alfabeto
      {
          indiceDaLetraAtual = alf.indexOf(input.substring(i,(i+1)));
          if(chave > indiceDaLetraAtual)
            //outText += alf[(chave + indiceDaLetraAtual)-(alf.length-chave)+1];
            outText += alf[(chave - indiceDaLetraAtual) % alf.length];
          else
          {
            outText += alf[(indiceDaLetraAtual - chave) % 25];
          }
            
          i++;
      }
      else{
        /*if(input.substring(i,(i+1)) == " ")
        {*/
            outText += input.substring(i,(i+1));
            i++
        /*}
        else
        {
            alert("Não inclua acentos nas letras!"); //Se o caractere não estiver no vetor 'alfabeto' ele dispara um alert apontando o erro
            outText = "";
            break;  
        }*/
      }
    }

    return outText;
}

/*function verificarCriptografia(){
    var chave = document.getElementById('txtChave');
    var select = document.getElementById('selecione');
    var indice = select.selectedIndex;
    switch(indice)
    {
        case 0:
            chave.disabled = true;
            break;

        case 1:
            chave.disabled = false;
            break;

        default:
            chave.disabled = true;
            break;
    }   
}*/

/* Criptografar */
function cA1Z26 (mensagem)
{
    var resul = "";
    var continuar = true;

    for(var i = 0; i < mensagem.length; i++)
    {
        var letra = mensagem.charAt(i);
        
        switch(letra)
        {
            case "A":
                resul += "1";
                break;
                
            case "B":
                resul += "2";
                break;
            
            case "C":
                resul += "3";
                break;
                
            case "D":
                resul += "4";
                break;
                
            case "E":
                resul += "5";
                break;
                
            case "F":
                resul += "6";
                break;
                
            case "G":
                resul += "7";
                break;
                
            case "H":
                resul += "8";
                break;
                
            case "I":
                resul += "9";
                break;
                
            case "J":
                resul += "10";
                break;
                
            case "K":
                resul += "11";
                break;
                
            case "L":
                resul += "12";
                break;
                
            case "M":
                resul += "13";
                break;
                
            case "N":
                resul += "14";
                break;
                
            case "O":
                resul += "15";
                break;
                
            case "P":
                resul += "16";
                break;
                
            case "Q":
                resul += "17";
                break;
                
            case "R":
                resul += "18";
                break;
                
            case "S":
                resul += "19";
                break;
                
            case "T":
                resul += "20";
                break;
                
            case "U":
                resul += "21";
                break;
                
            case "V":
                resul += "22";
                break;
                
            case "W":
                resul += "23";
                break;
                
            case "X":
                resul += "24";
                break;
                
            case "Y":
                resul += "25";
                break;
                
            case "Z":
                resul += "26";
                break;

            case " ":
                resul = resul.substring(0, resul.length - 1);
                resul += " ";
                break;

            default:
                alert("Por favor, não insira caractares que não sejam letras ou espaços!");
                return " ";
                break;
        }
        if(letra != " ")
            resul += "-";
    }

    return resul.substring(0, resul.length - 1);
}

/* Descriptografar */
function DEScA1Z26(mensagem)
{
    var result = "";

    while(mensagem != "")
    {
        var localIfem = mensagem.indexOf("-");
        var parteMensagem = "";
        if(localIfem < 0)
            parteMensagem = mensagem.substring(0);
        else
            parteMensagem = mensagem.substring(0, localIfem);

        if(parteMensagem.indexOf(" ") < 0)
        {
            var r = alf[parseInt(parteMensagem) - 1];

            if(r == undefined)
            {
                alert("A entrada possue caractares invalidos para esse tipo de criptografia!");
                return "";
            }

            result += r;

            if(localIfem < 0)
                mensagem = "";
            else
                mensagem = mensagem.substring(mensagem.indexOf("-") + 1);
        }
        else
        {
            parteMensagem = parteMensagem.substring(0, parteMensagem.indexOf(" "));

            var r = alf[parseInt(parteMensagem) - 1] + " ";

            if(r == undefined)
            {
                alert("A entrada possue caractares invalidos para esse tipo de criptografia!");
                return "";
            }

            result += r;

            mensagem = mensagem.substring(mensagem.indexOf(" ") + 1);
        }
    }

    return result;
}