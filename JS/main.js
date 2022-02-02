// definiendo variables y trayendo datos del html

var buttonAdd = document.querySelector("#buttonAddWords");
var buttonAddleter = document.querySelector("#buttonAddleter");

/*
var textAddword = document.querySelector("#inputAdd");
var textAddLeter = document.querySelector("#inputAddleter");

let AddedWords = [];
let preterminedWords = ['javascript', 'html', 'css', 'sublime-text', 'visual-studio', 'variable', 'pagina-web', 'programacion', 'logica', 'oracle-one', 'alura', 'trello']
let words = { AddedWords, preterminedWords };
*/

// capturar click botones

buttonAdd.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click buttonAdd');
});

buttonAddLeter.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click buttonAdd');
});