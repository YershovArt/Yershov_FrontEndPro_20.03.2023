let allImages = document.querySelectorAll('.slider__image');
let next = document.querySelector('.button2');
let prev = document.querySelector('.button1');
console.log(allImages)
console.log(next)
console.log(prev)
prev.style.display = 'none';
let current_slide = 0;

next.addEventListener('click', function () {
    allImages[current_slide].style.opacity = 0;
    if (current_slide === allImages.length - 1) {
       next.style.display = 'none'
    } else {
        prev.style.display = 'inline-block'
        current_slide++;
    }
    allImages[current_slide].style.opacity = 1;
});

prev.addEventListener('click', function (){
    allImages[current_slide].style.opacity = 0;
    if(current_slide === 0) {
        prev.style.display = 'none'
    } else {
        next.style.display = 'inline-block'
        current_slide--
    }
    allImages[current_slide].style.opacity = 1;
})