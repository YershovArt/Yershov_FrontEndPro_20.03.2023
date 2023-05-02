// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує


class SuperMath {
    static add (x, y) {
        return x + y;
    }

    static sub (x, y) {
        return x - y;
    }

    static mult (x, y) {
        return x * y;
    }

    static div (x, y) {
        return x / y;
    }

    static module (x, y) {
        return x%y;
    }

    input() {
        let obj = {
            X: +prompt(`Please enter first number`),
            Y: +prompt(`Please enter second number`),
            znak: prompt(`Please enter math action '+' for addition
            '-' for subtraction
            '*' for multiplication
            '/' for division
            '%' for module`),
        }

        return obj;
        
    }

    check(obj) {
        let x = obj.X
        let y = obj.Y
        let z = obj.znak
        let todo = confirm(`Would you like to perform ${x} ${z} ${y}`);
        if (todo) {
            let count = z === '+' ? SuperMath.add(x,y) : z === '-' ? SuperMath.sub(x,y) : z === '*' ? SuperMath.mult(x,y) : z === '/' ? SuperMath.div(x,y) : SuperMath.module(x,y);
            return alert(`${count}`);
        } else {
            return this.check(this.input());
        }
    }


}

const p = new SuperMath();
let obj = p.input();
p.check(obj);