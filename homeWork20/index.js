//1. Створити клас Людина.
//Властивості:
//імʼя;
//стать.
//Методи:
//конструктор, який приймає два параметри: імʼя та стать.

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const ivan = new Person('Ivan', 'male');
const boris = new Person('Boris', 'female');
const ania = new Person('Ania', 'male');
const petia = new Person('Petia', 'female');


//2. Створити клас Квартира.
//Властивості:
//конструктор не потрібен;
//масив жителів, який при створенні пустий.
//Методи:
//додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Flat {
arrPeople = [];
  addPerson(human) {
      this.arrPeople.push(human);
      return this.arrPeople;

    }
}

const flat355 = new Flat();
const flat356 = new Flat();
const flat357 = new Flat();

flat355.addPerson(ivan);
flat355.addPerson(boris);
flat356.addPerson(ania);
flat357.addPerson(petia);
console.log(flat355.arrPeople)
console.log(flat356.arrPeople)
console.log(flat357.arrPeople)


//3. Створити клас Будинок.
//Властивості:
//масив квартир, який при створенні пустий;
//максимальна кількість квартир.
//Методи:
//конструктор, який приймає один параметр: максимальну кількість квартир;
//додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
//чи не буде кількість перевищувати максимальну кількість квартир,
//і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    constructor(flatMax) {
         this.flatMax = flatMax;
         this.arr = [];
    }

    addFlat(flat) {
        if (this.flatMax <= this.arr.length) {
            console.log('no space in house');
        } else {
            this.arr.push(flat);
            return this.arr
        }

    }
}

const akvarel = new House(2);

console.log(akvarel.addFlat(flat355));
console.log(akvarel.addFlat(flat356));

akvarel.addFlat(flat357);



