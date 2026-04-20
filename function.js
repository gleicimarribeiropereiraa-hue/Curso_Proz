const palavras = ["Futuro","Informação", "Tecnologia", "Inovação", "Evolução","Trabalho Duro"];
const elemento = document.getElementById('texto');

let indexPalavra = 0;
let indexLetra = 0;

function escrever() {
    if (indexLetra < palavras[indexPalavra].length) {
        elemento.innerHTML += palavras[indexPalavra][indexLetra]+='.';
        indexLetra++;
        setTimeout(escrever, 80);
    } else {
        setTimeout(apagar, 1500);
    }
}

function apagar() {
    if (indexLetra > 0) {
        elemento.innerHTML = palavras[indexPalavra].substring(0, indexLetra - 1);
        indexLetra--;
        setTimeout(apagar, 50);
    } else {
        indexPalavra = (indexPalavra + 1) % palavras.length;
        setTimeout(escrever, 300);
    }
}

escrever();