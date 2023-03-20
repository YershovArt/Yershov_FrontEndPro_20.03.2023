
//  TODO Напишіть скрипт, який переводить години в секунди і має робити насутпне:

// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.
while(true) {
alert('FROM HOURS TO SECONDS CONVERTER')
let hours = Number(prompt('Please enter quantity of hours to convert', ''));
if (Number.isNaN(hours)) {
    alert('Numbers only!')
} else {
    let convertToSeconds = hours * 3600;
    alert(`${hours} hours=${convertToSeconds} seconds`);
}
}







