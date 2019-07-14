const slide = document.getElementById('slider__wrap-id');
const left = document.getElementById('slider__button-left');
const right = document.getElementById('slider__button-right');
let translate = 0;

right.addEventListener('click', function () {
    switch (translate) {
        case 0 :
            slide.style.transform = `translateX(calc(-33.333%)`;
            translate++;
            break;
        case 1 :
            slide.style.transform = `translateX(-66.666%)`;
            translate++;
            break;
        case 2 :
            slide.style.transform = `translateX(0%)`;
            translate = 0;
            break;
    }
})

left.addEventListener('click', function () {
    switch (translate) {
        case 0 :
            slide.style.transform = `translateX(-66.666%)`;
            translate = 2;
            break;
        case 1 :
            slide.style.transform = `translateX(0%)`;
            translate--;
            break;
        case 2 :
            slide.style.transform = `translateX(-33.333%)`;
            translate--;
            break;
    }
})