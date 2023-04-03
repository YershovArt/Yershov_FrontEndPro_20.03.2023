// TODO Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [4, 'hi', 5, 'hello'];

function countNumbers(array) {

    let sum = 0;

    for (let i = 0;i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
    }

    return sum;

}

console.log(countNumbers(arr));

// TODO Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути:
// +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

let repeater = true;

while(repeater){

    let firstNumber;

        do {
            firstNumber = +prompt(`Please input first integer number`, 0);

            if (isNaN(firstNumber)) {
            alert(`Please numbers only`);
            }

        } while(isNaN(firstNumber));

    let secondNumber;

    do {
        secondNumber = +prompt(`Please input first integer number`, 0);

        if (isNaN(secondNumber)) {
            alert(`Please numbers only`);
        }

    } while(isNaN(firstNumber));

    let mathAction;

    let checker = true;

    do {

        mathAction = prompt(`Please input type of math action that you would like to commit with numbers
        For addition input: +
        For subtraction input: -
        For multiplication input: *
        For division input: /
        For finding remainder from division input: %
        For putting first number to the power of second number , please input : ^`, 0).trim();

        if (mathAction === '+' || mathAction === '-' ||
            mathAction === '*' ||
            mathAction === '/' ||
            mathAction === '%' ||
            mathAction === '^') {
            checker = false;
        } else {
            alert(`Please input + or - or * or / or % or ^`);
        }

    }while(checker)

    function doMath(x, znak, y) {
        let result = znak === '+' ?  x + y :
        znak === '-' ?  x - y :
        znak === '*' ? x * y :
        znak === '/' ? x / y :
        znak === '%' ? x % y : x ** y;

        return result;

    }

    alert(doMath(firstNumber, mathAction, secondNumber));

    repeater = confirm(`Would you like to repeat?`);
};

// TODO Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

alert(`Would you like to create lists of items by groups?`);

let rows;

do {

    rows = +prompt(`How many groups would you like to have? (Please numbers only)`);

    if (isNaN(rows)) {
        alert(`Please, numbers only!`)
    }

} while (isNaN(rows));

let columns;

do {
    columns = +prompt(`How many items in groups would you like to paste? (Please, numbers only!)`);

    if (isNaN(columns)) {
        alert(`Please, numbers only!`)
    }

} while (isNaN(columns));

function createList(group, items) {

    let out = '';

    let userArr = [];

    for (let i = 0; i < group; i++) {
        userArr[i] = [];
        out += `${prompt(`name your ${i+1} group`)} <br>`;
        for (let k = 0; k < items; k++) {
            userArr[i][k] = prompt(`Please write ${1+k} item in ${1+i} group`);
            out += `${userArr[i][k]} `;
        }
        out += '<br><br><hr>';
    }

    return out;

};

document.querySelector('.out').innerHTML = createList(rows, columns);

// TODO Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let string = prompt(`Please input string to process`);

let deleteLetters = '';

deleteLetters = prompt(`Please input letters that you would like to delete from string. Example: abcd`);

function stringToArray(strings) {

    let arr = [];

    for(let i = 0; i < strings.length; i++) {
        arr.push(string[i]);
    }

    return arr;

};

function deleteLettersFromString(arrString, arrDeleteLetters) {

    for (let i = 0; i < arrDeleteLetters.length; i++) {
       for (let j = 0; j < arrString.length; j++) {
            if (arrDeleteLetters[i] === arrString[j])
                delete arrString[j];
       }
    }

    let newString = ''

    for (let k = 0; k < arrString.length; k++) {
        if (typeof arrString[k] === 'string') {
            newString += arrString[k];
        }
    }
        return newString;
}

alert(deleteLettersFromString(stringToArray(string), stringToArray(deleteLetters)));