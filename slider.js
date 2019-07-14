const slide = document.getElementById('sl');
const left = document.getElementById('left');
const right = document.getElementById('right');
let translate = 0;

right.addEventListener('click', function () {
    switch (translate) {
        case 0 :
            slide.style.transform = `translateX(-33.3%)`;
            translate++;
            break;
        case 1 :
            slide.style.transform = `translateX(-66.6%)`;
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
            slide.style.transform = `translateX(-66.6%)`;
            translate = 2;
            break;
        case 1 :
            slide.style.transform = `translateX(0%)`;
            translate--;
            break;
        case 2 :
            slide.style.transform = `translateX(-33.3%)`;
            translate--;
            break;
    }
})