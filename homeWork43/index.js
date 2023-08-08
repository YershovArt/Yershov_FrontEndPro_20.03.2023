//HW 43. Пояснити чому є різниця між встановленою та виведеною годиною.

let date = new Date();

console.log('First date', date);

date.setFullYear(2024);
date.setMonth(11);
date.setDate(25);
date.setHours(12);
date.setMinutes(45);
date.setSeconds(30);

console.log('Second date', date);