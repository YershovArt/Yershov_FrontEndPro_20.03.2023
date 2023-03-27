// TODO Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
out1 = document.querySelector('.out-1');
// let outPage = '';
// for (let i = 20; i <= 30; i+=0.5) {
//
//         outPage = outPage + i + ' ';
//
// }
// out1.innerHTML = outPage;

 // TODO Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

//  let outPage = '';
//  for (let i = 10; i <= 100; i+=10) {
//
//          outPage = outPage + 27*i + ' ';
//
//  }
//  out1.innerHTML = outPage;

   // TODO Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

//     let outPage = '';
//     let n = 50;
//
//       for (let i = 1; i <= 100; i++) {
//       if (i**2 < n ) {
//               outPage = outPage + i + ' ';
//               }
//       }
//       out1.innerHTML = outPage;

   // TODO Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
alert('Would you like to check if a number  is prime?')

let checker = '';
let n = 1;
while (repeater === 0 || isNaN(repeater) === true) {
n = +prompt(`Please enter positive integer number and not 0`, '1');
repeater = n;
}
for (let i = 2; i <= n-1; i++) {
console.log(n);
if (n%i === 0 ) {
checker = n;
}
}
checker === '' ?   alert('Number is  prime') : alert('Number is not prime');

// TODO Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
//   alert('Check if your number is a result of rising 3 to any power')
//   let outPage = '';
//   let repeater = 0;
//   let n = 1;
//    while (repeater === 0 || isNaN(repeater) === true) {
//   n = +prompt(`Please enter positive integer number and not 0`, '1');
//   repeater = n;
//}
//    let i = 0;
//   while (n%3 === 0) {
//     i++;
//   n/=3;
//
//   console.log(`i: ${i}`)
//   console.log(`n: ${n}`)
//   }
//    n === 1 ? alert(`Your number is 3 to the power of ${i}`) : alert(`Your number is not a result of rising 3 to a power`);


