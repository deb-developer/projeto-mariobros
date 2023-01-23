//Seleciona os elementos HTML
const btnTrailer = document.getElementById('btn-trailer');
const btnFechar = document.getElementById('btn-fechar');
const modal = document.querySelector('.modal');
const trailer = document.getElementById('vd-trailer');
const link = trailer.src;
console.log(link);

//Verifica o link do trailer
function alternarModal(){
    modal.classList.toggle('visivel')
}

//Abre e fecha a modal encerrando o vídeo
btnTrailer.addEventListener('click', () => {
    alternarModal();
    trailer.setAttribute("src", link)
});

btnFechar.addEventListener('click', () => {
    alternarModal();
    trailer.setAttribute("src","")
});