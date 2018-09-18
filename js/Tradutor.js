/* Alfabeto */
var alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"
          , "T", "U", "V", "W", "X", "Y", "Z"];

function criptografar(mensagem, idCripto)
{
    mensagem = mensagem.toUpperCase();
    var nMensagem = "";
    
    switch(idCripto)
    {
        case 1:
            nMensagem = cA1Z26(mensagem);
            
        default:
            nMensagem = mensagem;
            break;
    }
    
    return nMensagem;
}

/* Criptografar */
function cA1Z26 (mensangem)
{
    for(var i in mensagem)
    {
        var resul = "";
        
        switch(mensagem[i])
        {
            case "A":
                resul = "1";
                break;
                
            case "B":
                resul = "2";
                break;
            
            case "C":
                resul = "3";
                break;
                
            case "D":
                resul = "4";
                break;
                
            case "E":
                resul = "5";
                break;
                
            case "F":
                resul = "6";
                break;
                
            case "G":
                resul = "7";
                break;
                
            case "H":
                resul = "8";
                break;
                
            case "I":
                resul = "9";
                break;
                
            case "J":
                resul = "10";
                break;
                
            case "K":
                resul = "11";
                break;
                
            case "L":
                resul = "12";
                break;
                
            case "M":
                resul = "13";
                break;
                
            case "N":
                resul = "14";
                break;
                
            case "O":
                resul = "15";
                break;
                
            case "P":
                resul = "16";
                break;
                
            case "Q":
                resul = "17";
                break;
                
            case "R":
                resul = "18";
                break;
                
            case "S":
                resul = "19";
                break;
                
            case "T":
                resul = "20";
                break;
                
            case "U":
                resul = "21";
                break;
                
            case "V":
                resul = "22";
                break;
                
            case "W":
                resul = "23";
                break;
                
            case "X":
                resul = "24";
                break;
                
            case "Y":
                resul = "25";
                break;
                
            case "Z":
                resul = "26";
                break;
        }
        
        
    }
}