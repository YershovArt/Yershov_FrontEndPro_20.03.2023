// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

let urlCheck = document.querySelector('#forUrl'); // Для збирання данних
let gotToUrlButton = document.querySelector('.goToUrlButton')
let urlArr = [];
let resultUrl ='';

document.querySelector('.urlButton').addEventListener('click', function () {
    urlArr = urlCheck.value.split(':');
    resultUrl = urlArr[0] === 'http' || urlArr[0] === 'https' ? urlArr.join('') : `https://${urlArr.join('')}`
    gotToUrlButton.textContent = `Go to: ${resultUrl}`;
})

gotToUrlButton.addEventListener('click', function () {
    window.location.href = resultUrl;
})


