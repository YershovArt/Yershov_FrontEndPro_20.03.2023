//1. Створити сутність "Людина".
//Властивості:
//імʼя;
//вік.
//Методи:
//конструктор, який приймає два параметри: імʼя та вік;
//метод, який виводить у консоль інформацію про людину.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personAbout() {
        console.log(`Name ${this.name}. Age ${this.age}`)
    }
}

//2. Створити сутність "Автомобіль".
//Властивості:
//марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//власник.
//Методи:
//конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
//присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
//метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Car {
    constructor(carBrand, carModel, carLicensePlate) {
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.carLicensePlate = carLicensePlate;
        this.owner;
    }

    addOwner(person) {
        if (person.age >= 18) {
        this.owner = person
        return this;
        }
        console.log(' You must be over 18 years old to drive a car');
    }

    carInfo() {
        console.log(`Car: ${this.carBrand},  Model: ${this.carModel},  Car License Plate: ${this.carLicensePlate}`);
        return this.owner.personAbout();
    }
}

//В якості демонстраціїї створити:
//декілька екземплярів класу Людина;
//декілька екземплярів класу Автомобіль;
//присвоїти власників автомобілям.

let ivan = new Person('Ivan', 25);
let boris = new Person('Boris', 15);
let ford = new Car('ford', 'Puma', 'AE0770Ek')
let lexus = new Car('lexus', 'us', 'AE0110Ek')

console.log(ford.addOwner(ivan));
lexus.addOwner(boris);
ford.addOwner(ivan).carInfo();


