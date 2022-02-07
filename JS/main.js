// capturar inputs 
var AddWordsForm = document.querySelector(".newWordForm");

var inputAddLeter = document.querySelector("#InputAddleter");

// capturar click botones
var buttonAdd = document.querySelector(".buttonAdd").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("Click addWord");
    addNewWords(AddWordsForm);
});

var buttonAddleter = document.querySelector(".buttonAddleter").addEventListener("click",(event) => {
    event.preventDefault()
    console.log("click addleter");
});

// definiendo accion boton jugar
var buttonStart = document.querySelector(".buttonStart").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("click Start");
    //definiendo la palabra al azar
    var hideWord = preterminedWords[Math.floor(Math.random()*preterminedWords.length)];
    console.log(hideWord);
});


// agregar nuevas palabras
function addNewWords(AddWordsForm) {
    let text = AddWordsForm.input.value.toUpperCase();
    text = text.replace(new RegExp("[àáâãäå\\sæçèéêëìíîïñòóôõöœùúûüýÿ\\W1234567890]", 'g'),"");
    preterminedWords.push(text);
    console.log(text);
    console.log(preterminedWords);
  }
 
// definiendo variables
let AddedWords = [];
let preterminedWords = ['javascript', 'html', 'css', 'sublime-text', 'visual-studio', 'variable', 'pagina-web', 'programacion', 'logica', 'oracle-one', 'alura', 'trello']
let text ="";
let lifes = 5;

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

if (lifes == 0) {
  document.getElementById("vida").innerText = "La palabra era: " + hideWord.toLocaleUpperCase();
  vidaCero();
}

//alabraUsuario = nuevaPalabra;
//document.getElementById("frase").innerHTML = palabraUsuario;

