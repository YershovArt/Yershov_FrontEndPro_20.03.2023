// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
let table  = document.createElement('table');
let tableData = ``;

for (let i = 1; i<=10; i++) {
    tableData += `<tr>`;
    for(let j = 1; j<=10; j++) {
        if (i>=2) {
            tableData+= `<td>${10*(i-1)+j}</td>`;
        } else {
            tableData+= `<td>${j}</td>`;
        }
    }
    tableData += `</tr>`;
}

document.querySelector('body').appendChild(table).innerHTML = tableData;