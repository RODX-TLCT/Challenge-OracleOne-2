
// definiendo variables
let AddedWords = [];
let preterminedWords = ['JAVASCRIPT', 'HTML', 'CSS', 'SUBLIME-TEXT', 'VISUAL-STUDIO', 'VARIABLE', 'WEBPAGE', 'PROGRAMACION', 'LOGICA', 'ORACLE-ONE', 'ALURA', 'TRELLO']
let text ="";
let lifes = 8;

// capturar inputs 
var AddWordsForm = document.querySelector(".newWordForm");

var inputAddLeter = document.querySelector("#InputAddleter");

//Definiendo la palabra al azar 
var hideWord = preterminedWords[Math.floor(Math.random()*preterminedWords.length)];
console.log(hideWord);
let newWord= [];
  for(i=0;i<hideWord.length;i++){
    newWord.push("_");
    document.querySelector('#output').innerHTML = newWord.join(" ");  
  }

// captura click y accion del boton agregar 
var buttonAdd = document.querySelector(".buttonAdd").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("Click addWord");
    addNewWords(AddWordsForm);
});

// definiendo accion boton jugar
var buttonStart = document.querySelector(".buttonStart").addEventListener("click",(event) => {
  event.preventDefault();
  console.log("click Start");
  hideWord = preterminedWords[Math.floor(Math.random()*preterminedWords.length)]; 
  console.log(hideWord);
});

// captura click y accion del boton comprobar letra
var buttonAddleter = document.querySelector(".buttonAddleter").addEventListener("click",(event) => {
    event.preventDefault()
    console.log("click addleter");
    //captura de letra y conversion a mayuscula
    let leter = document.querySelector('.InputAddleter ').value.toUpperCase();
    console.log(leter)
    
var count = false;
  for (let i = 0; i < hideWord.length;i++){
      if(leter == hideWord[i]) {
        newWord[i] = leter;
        count= true;
      }
  }
  if (!count){
    lifes--;
  }

  document.querySelector('#output').innerHTML = newWord.join(" ");  
  console.log(lifes);
  console.log(newWord);

      // definiendo acciones segun intentos restantes 
      if (lifes == 7) {
        vidaSiete();
      }  
      if (lifes == 6) {
        vidaSeis();
      }
      if (lifes == 5) {
        vidaCinco();
      }
      if (lifes == 4) {
        vidaCuatro();
      }
      if (lifes == 3) {
        vidaTres();
      }
      if (lifes == 2) {
        vidaDos();
      }
      if (lifes == 1) {
        vidaUno();
      }
      if (lifes == 0 ) {
        document.querySelector('#output').innerHTML = ("La palabre era : " + hideWord);
        console.log ("La palabre era : " + hideWord);
        vidaCero();
      }
});

// funcion para agregar nuevas palabras y validacion de texto 
function addNewWords(AddWordsForm) {
    let text = AddWordsForm.input.value.toUpperCase();
    text = text.replace(new RegExp("[àáâãäå\\sæçèéêëìíîïñòóôõöœùúûüýÿ\\W1234567890]", 'g'),"");
    preterminedWords.push(text);
    console.log(text);
    console.log(preterminedWords);
  }


