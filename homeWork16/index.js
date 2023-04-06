//Дан масив
//Знайти мінімальний елемент масиву та його порядковий номер.
//Знайти максимальний елемент масиву та його порядковий номер.
//Визначити кількість негативних елементів.
//Знайти кількість непарних позитивних елементів.
//Знайти кількість парних позитивних елементів.
//Знайти суму парних позитивних елементів.
//Знайти суму непарних позитивних елементів.
//Знайти добуток позитивних елементів.
//Знайти найбільший серед елементів масиву, ост альні обнулити.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//кількість позитивних елементів.

function returnPositive(array) {

    let positiveArr = [];
    for (let positive of array) {
        if (positive >= 0) {
            positiveArr.push(positive);
        }
    }

    return positiveArr;

}

console.log(returnPositive(arr).length)

// Визначити кількість негативних елементів.
function returnNegative(array) {

    let negativeArr = [];
    for (let negative of array) {
        if (negative < 0) {
            negativeArr.push(negative);
        }
    }

    return negativeArr;

}

console.log(returnNegative(arr).length);

// Знайти суму позитивних елементів массиву
function returnSum(array) {

   let sum = 0;
    for (let item of array) {
       sum += item;
    }

    return sum;

}

console.log(returnSum(returnPositive(arr)));

//Знайти мінімальний елемент масиву та його порядковий номер.
function returnMin(array) {

    return Math.min(...array);

}

console.log(returnMin(arr));
console.log(arr.indexOf(returnMin(arr)));

//Знайти максимальний елемент масиву та його порядковий номер.
function returnMax(array) {

    return Math.max(...array);

}

console.log(returnMax(arr));
console.log(arr.indexOf(returnMax(arr)));

//Знайти кількість парних позитивних елементів.
function returnEven(array) {

    let evenArr = [];

    for (let even of array) {
        if (even % 2 === 0) {
            evenArr.push(even);
        }
    }

    return evenArr;

}

console.log(returnEven(returnPositive(arr)).length);

//Знайти кількість непарних позитивних елементів.
function returnOdd(array) {

    let oddArr = [];

    for (let odd of array) {
        if (odd % 2 !== 0) {
            oddArr.push(odd);
        }
    }

    return oddArr;

}

console.log(returnOdd(returnPositive(arr)).length);

//Знайти суму парних позитивних елементів.
console.log(returnSum(returnPositive((returnEven(arr)))));
//Знайти суму непарних позитивних елементів.
console.log(returnSum(returnPositive((returnOdd(arr)))));

// Знайти добуток позитивних елементів.

function returnMultiplication(array) {
    let mult = 1;

    for (let item of array) {
        mult *= item;
    }

    return mult;

}

console.log(returnMultiplication(returnPositive(arr)));

//Знайти найбільший серед елементів масиву, ост альні обнулити.
function returnMaxAndZero(array, max) {

   let zeroArr = [];

    for (let element of array) {
        if (element < max) {
            zeroArr.push(0);
        } else {
             zeroArr.push(max);
        }
    }

return zeroArr;

}
//Знайти найбільший серед елементів масиву, ост альні обнулити.
console.log(returnMaxAndZero(arr, returnMax(arr)));
