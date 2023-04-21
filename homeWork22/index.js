//Вам потрібно зробити конструктор сутності "Студент".
//Студент має ім'я, прізвище, рік народження — це властивості.
//Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
//Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
//Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце,
// в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того,
// щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
//Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
//і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
//якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor (name, surname, birthYear, grades) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
        this.visiting = [];
    }

    getAge() {
       let age =  new Date().getFullYear() - this.birthYear;
       return age;
    }

     getAverageGrade() {
             const sum = this.grades.reduce( (acc, grade) => acc + grade, 0);
             return sum / this.grades.length;
    }

    present() {
        if (this.visiting.length >= 25) {
           return console.log('limit exceeded max is 25')
        } else {
            this.visiting.push(true);
            return this;
        }
    }

    absent() {
       if (this.visiting.length >= 25) {
           return console.log('limit exceeded max is 25');
       } else {
            this.visiting.push(false);
            return this;
       }
    }

    summary() {
        const gradeResult = this.getAverageGrade();
        const visited = this.visiting.reduce( (acc, visit) => {

            if(visit) {
                return acc + 1;
            } else {
                return acc + 0;
            }

        },0)

        const visitResult = visited/25;

        let result = gradeResult >= 90 && visitResult >= 0.9 ? `Молодець!` :
                      gradeResult >= 90 && visitResult < 0.9 ? `Добре, але можна краще.` :
                      gradeResult < 90 && visitResult >= 0.9 ? `Добре, але можна краще.` :
                      `Редиска!` ;
        return result;

    }

}
// 1 Сутність
const artem = new Student('Artem', 'Yershov', 1990, [60, 80, 70, 90, 90]);

let arrTry = new Array(25);
// Щоб викликати метод скільки потрібно для заповнення массиво відвідувань
for (let i = 0;i < arrTry.length; i++) {
    artem.present();
}

console.log(`Студент ${artem.name} ${artem.surname}, ${artem.getAge()} років, середній бал = ${artem.getAverageGrade()}. ${artem.summary()}`);

// 2 Сутність
const slava = new Student('Slava', 'Purkin', 2000, [90, 100, 100, 100, 90]);

for (let i = 0;i < arrTry.length; i++) {
    slava.present();
}

console.log(`Студент ${slava.name} ${slava.surname}, ${slava.getAge()} років, середній бал = ${slava.getAverageGrade()}. ${slava.summary()}`);

// 3 Сутність
const badBoy = new Student('Bad', 'Boy', 1993, [50, 50, 50, 50, 60]);

for (let i = 0;i < arrTry.length; i++) {
   if (i % 2 === 0)badBoy.present();
   if (i % 2 !== 0)badBoy.absent();
}

console.log(`Студент ${badBoy.name} ${badBoy.surname}, ${badBoy.getAge()} років, середній бал = ${badBoy.getAverageGrade()}. ${badBoy.summary()}`);

