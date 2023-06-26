// Написати приклад використання методів функцій window.open()/window.close().
// www.google.com не зміг закрити через window.close
// www.github.com зміг закрити через window.close
/// Тут стара домашка 
let urlCheck = document.querySelector('#forUrl'); // Для збирання данних
let gotToUrlButton = document.querySelector('.openPopup')
let closePopUp = document.querySelector('.closePopUp')
let popUpWindow;
let urlArr = [];
let resultUrl ='';

document.querySelector('.urlButton').addEventListener('click', function () {
    urlArr = urlCheck.value.split(':');
    resultUrl = urlArr[0] === 'http' || urlArr[0] === 'https' ? urlArr.join('') : `https://${urlArr.join('')}`
    gotToUrlButton.textContent = `open: ${resultUrl}`;
})
/// Тут нова домашка використав стару для краси 
gotToUrlButton.addEventListener('click', function () {
    popUpWindow = window.open(resultUrl, 'popup', 'width=600,height=600,left=800, top=300' );
})

closePopUp.addEventListener('click', function() {
    popUpWindow.close();
})