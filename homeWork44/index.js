let startDate = new Date('2023-06-23');
let endDate = new Date('2023-06-30');

let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

console.log(timeDiff);

let daysDiff = new Date(timeDiff); // як зробити це ж використовуючи Date

console.log(daysDiff.getDate()-1, daysDiff.getHours(), daysDiff.getMinutes());