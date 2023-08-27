let move = 0;
const sliderLine= document.querySelector('.slider_line');

function nextSlide(){
    move+=1200;
    if (move>2400){move=0;}
    sliderLine.style.left = -move + 'px';
}

document.querySelector('.slider').addEventListener('click', nextSlide);
let timerId = setInterval(nextSlide, 7000);
