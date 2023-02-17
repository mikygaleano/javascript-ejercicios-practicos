export default function Slider () {

    const sliders = [...document.querySelectorAll('.slider-body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));


    function changePosition (change) {
        const curreElement = Number(document.querySelector('.slider-body-show').dataset.id);

        value = curreElement;
        value += change;

        if (value === 0 || value == sliders.length+1) {
            value = value === 0? sliders.length: 1
        }

        sliders[curreElement-1].classList.toggle('slider-body-show');
        sliders[value-1].classList.toggle('slider-body-show');

    };
}