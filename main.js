let estado = document.getElementById('status');
let texto = document.getElementById('text');

let character = document.getElementById('character');
let words = document.getElementById('words');
let lines = document.getElementById('lines');
let symbols = document.getElementById('symbols');




function count () {
    if(texto.value.length === 0 ){
        estado.style.display = "none";
    } else{
        estado.style.display = "block";
        character.innerHTML = ` ${texto.value.length} Charaters`;
        words.innerHTML = `${texto.value.trim().split(/\s+/).length} Words`;
        lines.innerHTML = `${texto.value.split("\n").length} Lines`;
        symbols.innerHTML = `${texto.value.split(/[!@#$%^&*()-_=+|<>.,?]/).length} Symbols`



    }
}

texto.addEventListener("input", count)
