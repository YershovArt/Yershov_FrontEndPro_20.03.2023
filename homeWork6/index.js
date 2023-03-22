//Yershov_homeWork6 TODO Створити скрипт яки повинен виконувати наступне: запитати у користувача рік народження; апитати в нього, в якому місті він живе; запитати його улюблений вид спорту.
let repeat = true;
while(repeat) {
// Year of birth
let year = new Date;
let yearOfBirth = +prompt("Please, print your year of birth (numbers only)",  'Print here');
yearOfBirth = yearOfBirth === 0 ? 'So pity that you didn`t want to print your  year of birth' : `You are ${year.getFullYear() - yearOfBirth} years old!`;
let placeOfLiving = prompt("Please, print in which town/city do you live",  'Print here');
// Place of living
placeOfLiving = placeOfLiving === null ? 'So pity that you didn`t want to print in which town/city do you live!' : placeOfLiving;
switch(placeOfLiving.toLowerCase().trim()) {
case 'london':
placeOfLiving = 'You live in the capital of Great Britain!';
break;
case 'kiev':
placeOfLiving = 'You live in the capital of Ukraine!';
break;
case 'washington':
placeOfLiving = 'You live in the capital of USA!';
break;
case 'so pity that you didn`t want to print in which town/city do you live!':
placeOfLiving = placeOfLiving;
break;
default:
placeOfLiving = `You live in ${placeOfLiving}!`;
}
console.log(placeOfLiving);
//favorite sport
let favoriteSport = prompt("Please, print your favorite sport name ",  'Print here');
favoriteSport = favoriteSport === null ? 'So pity that you didn`t want to print your favorite sport name!' : favoriteSport;
switch (favoriteSport.toLowerCase().trim()) {
case 'football':
favoriteSport = 'Cool! Do you want to become Lionel Messi?';
break;
case 'basketball':
favoriteSport = 'Cool! Do you want to become LeBron James?';
break;
case 'tennis':
favoriteSport = 'Cool! Do you want to become Novak Djokovic?';
break;
case 'so pity that you didn`t want to print your favorite sport name!':
favoriteSport = favoriteSport;
break;
default:
favoriteSport = `Cool! You are going for ${favoriteSport}!`;
}

alert(`${yearOfBirth}\n${placeOfLiving}\n${favoriteSport}`);
repeat = confirm('Do you want to repeat?');

}






