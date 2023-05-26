// TODO Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку блок з постом і
// зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки


let inputField = document.querySelector(".input-section__input");// input field
let findPostButton = document.querySelector(".input-section__button-post");// input field button
let postTitle = document.querySelector(".show-section__title") // h2 for post title
let postParagraph = document.querySelector(".show-section__paragraph") // p for post body
let showPostComments = document.querySelector(".input-section__button-article") // p for post body
let olForComments = document.querySelector(".show-section__list-comments") // ol of comments
let userInfoSpan = document.querySelector('span') // span for mistake

findPostButton.addEventListener('click',  function () {
    if (inputField.value < 1 || 100 < inputField.value ) {
        userInfoSpan.innerHTML = 'Please input valid data'
    } else {
        userInfoSpan.innerHTML = 'Post found'
        olForComments.innerHTML = ''
        findPost(inputField.value)
    }
} )

async function findPost(postId= 1) {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = await result.json()
        if(result.status === 200) {
            postParagraph.innerHTML = `${data['body']}`
            postTitle.innerHTML = `${data['title']}`
        } else {
            userInfoSpan.innerHTML = `Server Error ${result.error.message} please contact us for help`
        }
    } catch (err) {
        console.log(`Fetch error please contact us for help`)
    }
}

showPostComments.addEventListener('click', async function showComment() {
    olForComments.innerHTML=``; // clear the tags from previous comments
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputField.value}/comments`)
        const postComments = await result.json()
        if(result.status === 200) {
            for (let key in postComments) {
        olForComments.innerHTML += `
            <li class="box__list-item">
                <h2 class="box__list-body">${postComments[key]['email']}</h2>
                <h3 class="box__list-header">${postComments[key]['name']}</h3>
                <p class="box__list-email">${postComments[key]['body']}</p>
            </li> `
    }
        } else {
            userInfoSpan.innerHTML = `Server Error ${result.error.message} ,please, contact us for help`
        }
    } catch (err) {
        console.log(`Fetch error ,please, contact us for help`)
    }
})