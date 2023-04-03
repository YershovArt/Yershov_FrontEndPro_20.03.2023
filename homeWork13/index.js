// TODO Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(quantity, char) {
    let newString = ''
    for (let i = 0; i < quantity; i++) {
        k = Math.floor(Math.floor(Math.random() * (char.length - 0) + 0));
        newString += char[k];
    }
    return newString;
}

const key = generateKey(25, characters);
console.log(key);

