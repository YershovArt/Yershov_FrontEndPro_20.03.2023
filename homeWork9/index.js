// TODO Вивести на сторінку в один рядок через кому числа від 10 до 20.
out1 = document.querySelector('.out-1');
// let outPage = '';
// for (let i = 10; i <= 20; i++) {
//     if (i === 20) {
//         outPage = outPage + i
//     } else {
//         outPage = outPage + i + ',';
//     }  
// }
// out1.innerHTML = outPage;

// TODO Вивести квадрати чисел від 10 до 20.
// let outPage = '';
// for (let i = 10; i <= 20; i++) {
//     if (i === 20) {
//         outPage = outPage + i**2;  
//     }else {
//         outPage = outPage + i**2 + ',';   
//     }       
// }
// out1.innerHTML = outPage;

// TODO Вивести таблицю множення на 7.

// let outPage = '';  

//      for (let i = 1; i <= 10; i++) {     

//       outPage = outPage + i+ '*'+ 7 + '=' +7*i + '<br>';     

//     }

// out1.innerHTML = outPage;

// TODO Знайти суму всіх цілих чисел від 1 до 15..


// let outPage = 0;  

//      for (let i = 1; i <= 15; i++) {    

//       outPage = outPage + i;     

//     }

// out1.innerHTML = outPage;

// TODO Знайти добуток усіх цілих чисел від 15 до 35.


// let outPage = 1;  

//      for (let i = 15; i <= 35; i++) {    

//       outPage = outPage * i;     

//     }

// out1.innerHTML = outPage;

// TODO Знайти середнє арифметичне всіх цілих чисел від 1 до 500.


// let outPage = 0;
// let final = 500;

//      for (let i = 1; i <= final; i++) {    

//       outPage = outPage + i;     

//     }

// out1.innerHTML = outPage/final;

// TODO Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let outPage = 0;
// let final = 80;

// for (let i = 30; i <= final; i++) {    
// if ( i % 2 === 0) {
// outPage = outPage + i;     
// }
// }

// out1.innerHTML = outPage;

// TODO Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// let outPage = " ";
// let final = 200;

// for (let i = 100; i <= final; i++) {    
// if ( i % 3 === 0) {
// outPage = outPage + i + " ";     
// }
// }

// out1.innerHTML = outPage;


// TODO Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let outPage = " ";
// let final = 126;

// for (let i = 1; i <= final; i++) {    
// if ( final % i === 0) {
// outPage = outPage + i + " ";     
// }
// }

// out1.innerHTML = outPage;
// TODO Дано натуральне число. 
// Визначити кількість його парних дільників.

// let outPage = " ";
// let final = 256;

// for (let i = 1; i <= final; i++) {    
// if ( final % i === 0 && i%2 === 0) {
// outPage = outPage + i + " ";     
// }
// }

// out1.innerHTML = outPage;
// TODO Дано натуральне число. 
// // Знайти суму його парних дільників.
// let outPage = 0;
// let final = 8;

// for (let i = 1; i <= final; i++) {    
// if ( final % i === 0 && i % 2 === 0) {
// outPage = outPage + i;     
// }
// }

// out1.innerHTML = outPage;

// TODO Надрукувати повну таблицю множення від 1 до 10.

 let outPage = ' ';
 let final = 10;

 for (let i = 1; i <= final; i++) {
for (let j = 1; j <= final; j++ ) {
outPage = outPage + i + '*' + j + '=' +  j * i + "<br>";
 }
 outPage = outPage + '<hr>';
}
 out1.innerHTML = outPage;


