export default function Counter () {
    let acumulador = 0;
    let counter = document.querySelector('.span-counter');

    function reset () {

        acumulador = 0;
        counter.innerText = acumulador;
        
    };

    function atras () {
        acumulador = acumulador - 1;
        counter.innerText = acumulador;
    };

    function adelante () {
        acumulador = acumulador + 1;
        counter.innerText = acumulador;
    };

    function eventosBtn () {
        const btnPlay = document.querySelector('.btn-reset'),
        btnAtras = document.querySelector('.btn-atras'),
        btnAdelante = document.querySelector('.btn-adelante');

        btnPlay.addEventListener('click', reset);
        btnAtras.addEventListener('click', atras);
        btnAdelante.addEventListener('click', adelante);
    }

    eventosBtn();
}