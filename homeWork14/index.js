// TODO Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у функціюpow (num, degree).

function riseToPow(num, degree) {
    if (degree <= 0) {
        return 1;
    } else {
    return num * riseToPow(num, degree - 1);
    }
}

console.log(riseToPow(2, 8));