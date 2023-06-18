// TODO Створити програму для відображення результатів голосування. З наступними умовами:
//     Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
//     Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
//     При натисканні на смайл - під ним змінюється значення лічильника.
//     Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

let petPoll =  {
    question: "What is your favorite pet?",
    answers:['&#128054 Dog', '&#129437 Racoon', '&#128049 Cat', '&#128045 Mouse', '&#128048 Rabbit'],
    count: [3, 6, 8, 4, 7],
    selectedPet: -1,
}

let domPet = {
    question: document.querySelector('.question'),
    answers: document.querySelector('.answers'),
}

domPet.question.textContent = petPoll.question;

domPet.answers.innerHTML = petPoll.answers.map((answer, i) => {
    return (
        `
        <div class="answer" onclick="markSelect('${i}')">
        ${answer}
        <span class="counterAdd" ></span>
        </div>
        
        `
    )
}).join("");


function markSelect(i) {

    petPoll.selectedPet = +i;

    let a = document.querySelectorAll(' .answer ')
    for (let i = 0; i<a.length; i++) {
        if (i === petPoll.selectedPet) {
            a[i].classList.add('selected')
        } else {
            a[i].classList.remove('selected')
        }
    }
    showCounter();
}

function showCounter() {
    let answers = document.querySelectorAll('.answer')

    for (let i = 0; i < answers.length; i++) {
        let showCount = 0;
        if (i === petPoll.selectedPet) {
          showCount = petPoll.count[i]+1;
        } else {
         showCount = petPoll.count[i];
        }
        answers[i].querySelector('.counterAdd').textContent = showCount;
    }
}