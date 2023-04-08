//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
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

function returnSum(array) {

    let sum = 0;

    for (let item of array) {
        sum += item;
    }

    return sum;

}

function returnPositive(array) {

    let positiveArr = [];

    for (let item of array) {
        if (item >= 0)
        positiveArr.push(item);
    }

    return positiveArr;

 }

 function returnNegative(array) {

     let negativeArr = [];

     for (let item of array) {
         if (item < 0)
         negativeArr.push(item);
     }

     return negativeArr;

  }


// Знайти суму та кількість позитивних елементів.

console.log(returnSum(returnPositive(arr)));
console.log(returnPositive(arr).length);

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

//Визначити кількість негативних елементів.
console.log(returnNegative(arr).length);

//Знайти кількість парних позитивних елементів.

function returnEven(array) {
    let evenArr = []

     for (let item of array) {
             if (item % 2 === 0)
             evenArr.push(item);
         }

     return evenArr;

}

console.log(returnEven(arr).length)

//Знайти кількість непарних позитивних елементів.

function returnOdd(array) {

    let oddArr = []

     for (let item of array) {
             if (item % 2 !== 0)
             oddArr.push(item);
         }

    return oddArr;

}

console.log(returnOdd(arr).length);


//Знайти суму парних позитивних елементів.
console.log(returnSum(returnPositive(returnEven(arr))));

//Знайти суму непарних позитивних елементів.
console.log(returnSum(returnPositive(returnOdd(arr))));

//Знайти добуток позитивних елементів.
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

        let maxArr = [];

        for (let item of array) {
            if (max > item) {
                maxArr.push(0);
            } else {
                maxArr.push(item);
            }
        }

return maxArr;

}

console.log(returnMaxAndZero(arr, returnMax(arr)));