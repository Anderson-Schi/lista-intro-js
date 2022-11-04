// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt(`Digite a altura do retangulo: `);
  const largura = prompt(`Digite a largura: `);
  const area = altura*largura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt(`Digitte o ano atual: `);
  const nascimento = prompt(`Digite seu ano de nascimento: `);
  const idade = anoAtual - nascimento ;

  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return imc.toFixed(1);
}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Digite seu nome: `);
  const idade = prompt(`Digite sua idade: `);
  const email = prompt(`Informe seu email: `);

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`Digite uma cor favorita: `);
  const cor2 = prompt(`Digite uma segunda cor favorita: `);
  const cor3 = prompt(`Digite uma terceira cor favorita: `);

  const array = [cor1, cor2, cor3];

  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0] 


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length-1] // retorna o ultimo indice do array
  return ultimo;
}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const arr1 = array.shift(); // remove o primeiro indice do array
  const arr2 = array.pop(); // remove o ultimo indice do array
  array.push(arr1);
  array.unshift(arr2)

  return array

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const st1 = string1.toUpperCase()
  const st2 = string2.toUpperCase()

  return st1 === st2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual: ");
  const anoNascimento = prompt("Informe seu ano de nascimento: ");
  const anoCarteira = prompt("Informe a data de expedicao da sua carteira de identidade: ");
  const idade = anoAtual - anoNascimento
  const expRg = anoAtual - anoCarteira 

  const condicao20 = idade <= 20 && expRg >= 5;
  const condicao20e50 = idade > 20 && idade <= 50 && expRg >= 10;
  const condicao50Mais = idade > 50 && expRg >= 15;

  const renovaRg = condicao20 || condicao20e50 || condicao50Mais ;

  console.log(renovaRg);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
// implemente sua lógica aqui

  const anoBiCond1 = ano % 400 == 0 ;
  const anoBiCond2 = ano % 4 == 0 && ano % 100 != 0 ;
   //const anoBiCond3 = ano % 4 == 0 && ano % 100 == 0 && ano % 400 >= 1;
  const result = anoBiCond1 || anoBiCond2 //&& anoBiCond3;
  
 return result

  //console.log(ano, anoBiCond1, anoBiCond2, /* anoBiCond3 */ result);
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idadePerg = prompt("Voce e maior de 18 ? ");
  const idadeResp = idadePerg === "sim" 
  const escolaridadePerg = prompt("Voce e possui ensino medio completo? ");
  const escolaridadeResp = escolaridadePerg === "sim" 
  const disponibilidadePerg = prompt("Possui disponibilidade durante o horario do curso? ");
  const disponibilidadeResp = disponibilidadePerg === "sim" 

  const verific = idadeResp && escolaridadeResp && disponibilidadeResp ; 

  console.log(verific);
  //console.log(idadePerg, idadeResp,escolaridadePerg, escolaridadeResp,disponibilidadePerg, disponibilidadeResp );
}