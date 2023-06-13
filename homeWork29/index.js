// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

let picture = document.querySelector('.corgiPicture')
let button = document.querySelector('.corgiButton')
button.addEventListener('click', function () {
    let num = Math.floor(Math.random()*(7-1+1)+1)
    picture.src = `images/${num}.jpeg`
})



