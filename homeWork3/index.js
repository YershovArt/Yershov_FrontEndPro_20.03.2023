
// TODO Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
while(true) {
let firstTerm = Number(prompt('enter first number', ''));
let secondTerm = Number(prompt('enter second number', ''));
console.log(Number.isNaN(firstTerm));
console.log(Number.isNaN(secondTerm));
if (Number.isNaN(firstTerm) || Number.isNaN(secondTerm)) {
    alert('Numbers only!')
} else {
    let total = firstTerm + secondTerm;
    let difference = firstTerm - secondTerm;
    let quotient = firstTerm * secondTerm;
    let division = firstTerm / secondTerm;
    alert(`${firstTerm}+${secondTerm}=${total}\n${firstTerm}-${secondTerm}=${difference}\n${firstTerm}*${secondTerm}=${quotient}\n${firstTerm}/${secondTerm}=${division}`);
}
}






