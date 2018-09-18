var alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
           "T", "U", "V", "W", "X", "Y", "Z"];

var outText = "";

var input;
var chave;

function pegarDados(Input, Chave){
    input = document.getElementById(Input).value.toUpperCase();
    chave = parseInt(document.getElementById(Chave).value);
}

function mudarInput(sinal){
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
        outText += input.substring(i,(i+1));  //Se o caractere não estiver no vetor, ele apenas põe ele na string sem criptografar
        i++;
      }
    }
}

function crypt(){
  pegarDados("INPUT","CHAVE");
  mudarInput(1);

  document.getElementById("OUTPUT").value = outText;
}

function decrypt(){
  pegarDados("INPUTdec","CHAVEdec");
  mudarInput(-1);

  document.getElementById("OUTPUTdec").value = outText;
}