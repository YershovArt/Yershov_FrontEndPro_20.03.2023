//Створити масив, довжину та елементи якого задає користувач.
//
//Відсортувати масив за зростанням.
//
//Видалити елементи з масиву з 2 по 4 (включно!).

//У міру змін виводити вміст масиву на сторінку.

alert(`Would you like to create an array?`);

let arrSize = +prompt(`How many items would you like to insert into your array?`);

let userArr = [];

for (let i = 0; i < arrSize; i++) {

    let item = prompt(`What would be the first item?`, '')

     if (isNaN(item)) {
        userArr.push(item);
    } else {
        userArr.push(+item);
    }

}

console.log(userArr);

userArr.sort();

console.log(userArr);

userArr.splice(1, 3);

console.log(userArr);
