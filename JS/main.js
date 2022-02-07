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

var buttonStart = document.querySelector(".buttonStart").addEventListener("click",(event) => {
    event.preventDefault();
    console.log("click Start");
});


// definiendo variables
let AddedWords = [];
let preterminedWords = ['javascript', 'html', 'css', 'sublime-text', 'visual-studio', 'variable', 'pagina-web', 'programacion', 'logica', 'oracle-one', 'alura', 'trello']
let words = { AddedWords, preterminedWords };
let text
let lifes = 1

// agregar nuevas palabras
function addNewWords(AddWordsForm) {
    text = AddWordsForm.input.value.toUpperCase();
    text = text.replace(new RegExp("[àáâãäå\\sæçèéêëìíîïñòóôõöœùúûüýÿ\\W1234567890]", 'g'),"");

    //document.getElementById("inputExit").value = text.toLowerCase();
    console.log(text);
}



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
  console.log(palabraOculta);
  document.getElementById("vida").innerText = "La palabra era: " + palabraOculta.toLocaleUpperCase();
  vidaCero();
}

palabraUsuario = nuevaPalabra;
document.getElementById("frase").innerHTML = palabraUsuario;

