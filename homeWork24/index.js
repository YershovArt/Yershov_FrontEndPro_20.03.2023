//Мережа фастфудів пропонує кілька видів гамбургерів:
//маленький (50 тугриків, 20 калорій);
//великий (100 тугриків, 40 калорій).
//Гамбургер може бути з одним із декількох видів начинок:
//сиром (+ 10 тугриків, + 20 калорій);
//салатом (+ 20 тугриків, + 5 калорій);
//картоплею (+ 15 тугриків, + 10 калорій).
//Можна додати добавки:
//посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
//Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
//(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger {

    static SIZE_SMALL = 'small';
    static SIZE_BIG = 'big';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_SEASONING = 'seasoning';
    static TOPPING_MAYO = 'mayo';

    constructor(size, stuffing){
        this._price = (size === 'big' ? 100 : 50) + (stuffing === 'cheese' ? 10 :
        stuffing === 'salad' ? 20 : stuffing === 'potato' ? 15 : 0);
        this._calories = (size === 'big' ? 40 : 20) + (stuffing === 'cheese' ? 20 :
        stuffing === 'salad' ? 5 : stuffing === 'potato' ? 10 : 0);
    }

    addTopping(toppingType) {
        let toppingPrice = toppingType === 'seasoning' ? 15 : 20;
        let toppingCalories = toppingType === 'seasoning' ? 0 : 5;
        this._price += toppingPrice;
        this._calories += toppingCalories;
    }

    calculatePrice() {
        return this._price;
    }

    calculateCalories() {
        return this._calories;
    }

}

const order1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
console.log("order 1", order1.calculatePrice())
console.log("order 1", order1.calculateCalories())
order1.addTopping(Hamburger.TOPPING_SEASONING);
order1.addTopping(Hamburger.TOPPING_MAYO);
order1.addTopping(Hamburger.TOPPING_MAYO);
console.log("order 1", order1.calculatePrice())
console.log("order 1" , order1.calculateCalories())
console.log('______________________________________')
const order2 = new Hamburger(Hamburger.SIZE_SMALL);
console.log("order 2" , order2.calculatePrice())
console.log("order 2" , order2.calculateCalories())
order2.addTopping(Hamburger.TOPPING_MAYO);
order2.addTopping(Hamburger.TOPPING_SEASONING);
console.log("order 2" , order2.calculatePrice())
console.log("order 2" , order2.calculateCalories())
console.log('______________________________________')
const order3 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);
console.log("order 3" , order3.calculatePrice())
console.log("order 3" , order3.calculateCalories())
order3.addTopping(Hamburger.TOPPING_MAYO);
order3.addTopping(Hamburger.TOPPING_SEASONING);
console.log("order 3" , order3.calculatePrice())
console.log("order 3" , order3.calculateCalories())


