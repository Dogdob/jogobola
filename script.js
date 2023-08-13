const bola = document.querySelector('.bola');
const pipe = document.querySelector('.pipe');


const jump = () =>{
    bola.classList.add('jump');

    setTimeout(() => {

        bola.classList.remove('jump');

    }, 500);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const bolaPosition = +window.getComputedStyle(bola).bottom.replace('px','');

    if(pipePosition < 77 && pipePosition > 0  && bolaPosition < 8 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        bola.style.animation = 'none';
        bola.style.bottom = `${bolaPosition}px`;

        clearInterval(loop);
    }

},10);


document.addEventListener('keydown', jump);