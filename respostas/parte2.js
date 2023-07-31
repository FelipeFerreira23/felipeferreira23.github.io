// 1) Faça um laço for de 0 a 100 que retorne um array com todos os números que são divisíveis por 7 e exiba no console.
function listNumbers() {
  let arrayNumbers = [];
  for (var i = 0; i <= 100; i++) {
     if (i % 7 == 0) {
      arrayNumbers.push(i);
     }
  }
  return arrayNumbers;
}

console.log(listNumbers());


// 2) Crie uma função que receba dois parâmetros, o primeiro chamado 'texto' (string) e o segundo chamado 'vezes' (número), 
// com o objetivo retornar uma nova string com o texto repetido quantas vezes foi passado no parâmetro 'vezes', separado por vírgula. Exibir esta nova string no console.

function repeatValue(texto, vezes) {
    let arrayText = [];
    for (var i = 0; i <= vezes; i++) {
      arrayText.push(texto);
    }
     const stringText = arrayText.join(", ")
     console.log(stringText);
}

repeatValue('Felipe', 10);


// 3) Dado o seguinte HTML:
// <div class="pai"></div>
// <div class="filho></div>
// Qual o código seria necessário para inserir a div 'filho' dentro da div 'pai'?

$(".pai").prepend($(".filho"));


// 4) Dado o seguinte HTML:
// <div>
//   <p>texto</p>
//   <p>texto</p>
//   <p>texto</p>
// </div>
// Como seria para:

// alterar o texto do segundo parágrafo para 'Texto alterado';
// inserir uma classe 'last' no último parágrafo

$("div p:nth-child(2)").text("Texto Alterado");
$("div p").last().addClass("last");



// 5) Com o uso do operador ternário, faça uma função que recebe uma idade (número) e retorne uma string, 
// no console, com o texto "maior de idade" se o número maior que "18" ou "menor de idade", se o número for menor que "18".
function checkAge(idade) {
  const age = idade >= 18 ? "Maior de idade" : "Menor de idade";
  return age;
}

console.log(checkAge(18));


// 6) Dado o objeto:

// var obj = {
//   nomeObj: 'Mouse',
//   pesoObj: '150g'
// }
// Faça uma função que:

// modifique o nomeObj para 'Teclado' e o pesoObj para '500g';
// indexe em array;
// exiba o array no console.

function alterObj() {
  obj['nomeObj'] = 'Teclado';
  obj['pesoObj'] = '500g';
  
  const arrayObj = Object.entries(obj);
  console.log(arrayObj);
}

alterObj();


// 7) No texto 'Eu quero trabalhar na Seri.e Design', retorne no console, em variáveis diferentes:

// O texto de trás para frente substituindo os espaços em branco por pontos de exclamação;
// A última palavra do texto;
// A quantidade de caracteres do texto;
// O tipo de alguma variável criada acima.


function alterText(text) {
    const alterString = text.replaceAll(' ', '!');
    const newText = alterString.split('').reverse().join('');
  
    let lastWord = text.split(" ");
  
    console.log(newText);
    console.log(lastWord[lastWord.length - 1]);
    console.log(text.length);
    console.log(typeof newText);
}

alterText('Eu quero trabalhar na Seri.e Design');



// 8) Em uma lista de 5 divs:

// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// faça uma função para adicionar o atributo 'data-id' em cada uma das divs, 
// com o valor sendo a posição que se encontra a div na lista. Ex.: <div data-id="2">

function alterDiv() {
  $( "div" ).each(function( index ) {
    $(this).attr( "data-id", index + 1 );
  });
  
}

alterDiv();


// 9) Dado o seguinte html:

// <div class="content">
//   <ul>
//     <li>Categoria
//       <div class="subcontainer">
//         <ul tyle="display: none;">
//           <li>Subcategoria</li>
//         </ul>
//       </div>
//     </li>
//   </ul>
// </div>
// Faça um bloco javascript que trate o evento de click na palavra "Categoria" para:

// exibir a ul da subcategoria;
// adicione a classe "'active" na div "content" e na div "subcontainer".


$('.content li').click(function() {
  $('.subcontainer ul').show();
  $('.content, .subcontainer').addClass('active');
});


// 10) Dado o seguinte bloco de código:

// function observer() {
//   var target = '';
//   var restSecs = 0;
//   var intervalObserver = setInterval(function() {
//     target = document.querySelector('footer .content');
//     if ($(target).length >= 1 && restSecs <= 5) {
//       //do something
//     } else if( restSecs==5 ){
//       clearInterval(intervalObserver); 
//     } else { 
//       restSecs++; }
//    }, 1000); 
// } observer();
// Escolha a alternativa que melhor interpreta o que o bloco de código acima está fazendo?

// Observa o código para encontrar o elemento. Caso não encontrado, mais tempo é adicionado.
// Observa o código até encontrar o elemento. Quando encontrado, faz algo.
// Cria um intervalo de observação para procurar pelo elemento a cada 5 segundo.
// Observa o código por 5 segundos para encontrar o elemento. Caso não encontrado, a execução é interrompida.
// Observa se encontra mais de 1 elemento, quando encontrado interrompe a execução da função.


Observa o código por 5 segundos para encontrar o elemento. Caso não encontrado, a execução é interrompida.

