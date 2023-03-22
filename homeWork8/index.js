// Yershov_Homework7 TODO Створити скрипт який повинен виконувати наступне:
//питаємо у користувача, що він хоче зробити (add, sub, mult, div);
//питаємо у користувача перше число;
//запитуємо у користувача друге число;
//виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
let repeat = true;
while (repeat) {
let arithmeticAction = prompt(`What arithmetic action do you want to make?
For addition type: add;
For subtraction type: sub;
For multiplication type: mul;
For division type: div.
`,'')
if (arithmeticAction === 'add' || arithmeticAction === 'sub' || arithmeticAction === 'mul' || arithmeticAction === 'div') {
alert(`You have chosen ${arithmeticAction === 'add' ? 'addition' :
 arithmeticAction === 'sub' ? 'subtraction' :
 arithmeticAction === 'mul' ? 'multiplication' : 'division'}`);
let check = false;
let firstNum;
do {
firstNum = +prompt('Enter first number (numbers only!)');
if (typeof firstNum === 'number' && isNaN(firstNum) === false) {
check = false;
}else{
alert(`Please numbers only`);
check = true;
}
} while(check);
console.log(firstNum)
let secondNum;
do {
secondNum = +prompt('Enter second number (numbers only!)');
if (typeof secondNum === 'number' && isNaN(secondNum) === false) {
check = false;
}else{
alert(`Please numbers only`);
check = true;
}
} while(check);
console.log(secondNum)

let result;
let sign;

switch(arithmeticAction) {
case 'add':
sign= '+';
result = firstNum+secondNum;
break;
case 'sub':
sign= '-';
result = firstNum-secondNum;
break;
case 'mul':
sign= '*';
result = firstNum*secondNum;
break;
case 'div':
sign= '/';
result = firstNum/secondNum;
break;
};

alert(`${firstNum}${sign}${secondNum}=${result}`);

} else {
arithmeticAction = prompt('Please enter: add, sub, mul, div');
}
repeat = confirm('Do you want to to repeat?')
}