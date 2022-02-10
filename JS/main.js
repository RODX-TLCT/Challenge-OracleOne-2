
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

//receptor guiones   
let underscores = hideWord.replace(/./g,"_ ");


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
  //remplazo letras por guiones en palabra oculta luego de click en boton start
  underscores = hideWord.replace(/./g,"_ ");  
});

// captura click y accion del boton comprobar letra
var buttonAddleter = document.querySelector(".buttonAddleter").addEventListener("click",(event) => {
    event.preventDefault()
    console.log("click addleter");
    //captura de letra y conversion a mayuscula
    let leter = document.querySelector('.InputAddleter ').value.toUpperCase();
    console.log(leter)

    let newWord= "";

    for (let i = 0; i < hideWord.length;i++){
      if(leter == hideWord[i]) {
        newWord = newWord + leter + " ";
      }else{
        newWord = newWord + underscores[i*2] + " ";
      }
    }
    console.log(lifes);
    console.log(newWord);

    if(newWord == underscores){
      lifes--;
      console.log(lifes)
    }
    
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



//alabraUsuario = nuevaPalabra;
//document.getElementById("frase").innerHTML = palabraUsuario;

