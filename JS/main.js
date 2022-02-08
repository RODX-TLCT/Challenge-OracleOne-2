// capturar inputs 
var AddWordsForm = document.querySelector(".newWordForm");

var inputAddLeter = document.querySelector("#InputAddleter");

// definiendo variables
let AddedWords = [];
let preterminedWords = ['javascript', 'html', 'css', 'sublime-text', 'visual-studio', 'variable', 'pagina-web', 'programacion', 'logica', 'oracle-one', 'alura', 'trello']
let text ="";
let lifes = 5;

//Definiendo la palabra al azar 
var hideWord = preterminedWords[Math.floor(Math.random()*preterminedWords.length)];
console.log(hideWord);

//receptor guiones   
let underscores = hideWord.replace(/./g,"_ ");
console.log(underscores);


// captura click y accion del boton agregar 
var buttonAdd = document.querySelector(".buttonAdd").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("Click addWord");
    addNewWords(AddWordsForm);
});

// captura click y accion del boton comprobar letra
var buttonAddleter = document.querySelector(".buttonAddleter").addEventListener("click",(event) => {
    event.preventDefault()
    console.log("click addleter");
    //captura de letra y conversion a mayuscula
    var leter = document.querySelector('.InputAddleter ').value.toUpperCase();
    console.log(leter)
    //verificar coincidencia (aciertos) letra en palabra
    for (const i in hideWord){
      if(leter == hideWord[i]){
        underscores = underscores.replaceAT(i*2, leter);
      }
    }
    console.log(underscores);
});

// definiendo accion boton jugar
var buttonStart = document.querySelector(".buttonStart").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("click Start");
    hideWord = preterminedWords[Math.floor(Math.random()*preterminedWords.length)]; 
    console.log(hideWord);
    //remplazo letras por guiones en palabra oculta luego de click en boton start
    underscores = hideWord.replace(/./g,"_ ");
    console.log(underscores);  
});

// funcion para agregar nuevas palabras y validacion de texto 
function addNewWords(AddWordsForm) {
    let text = AddWordsForm.input.value.toUpperCase();
    text = text.replace(new RegExp("[àáâãäå\\sæçèéêëìíîïñòóôõöœùúûüýÿ\\W1234567890]", 'g'),"");
    preterminedWords.push(text);
    console.log(text);
    console.log(preterminedWords);
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

//alabraUsuario = nuevaPalabra;
//document.getElementById("frase").innerHTML = palabraUsuario;

