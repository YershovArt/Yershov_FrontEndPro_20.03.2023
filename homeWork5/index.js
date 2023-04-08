// TODO Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел
while(true) {
alert('COUNT AVERAGE OF 3 NUMBERS')
let firstNumber = Number(prompt('Please, enter first number', ''));
let secondNumber = Number(prompt('Please, enter second number', ''));
let thirdNumber = Number(prompt('Please, enter third number', ''));
if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || Number.isNaN(thirdNumber)) {
    alert('Numbers only!')
} else {
    let sumOfNumbers = firstNumber+secondNumber+thirdNumber;
    alert(`AVERAGE = ${sumOfNumbers/3}`);
}








