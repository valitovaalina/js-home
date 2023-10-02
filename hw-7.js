// Задание 1
let str = 'Окулус';
console.log(str.toUpperCase());

// Задание 2
function searchStart(arr, str) {
    return arr.filter((el) => el.toLowerCase().startsWith(str.toLowerCase()));
}
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let n = 32.58884;
console.log(`Округление до меньшего: ${Math.floor(n)}`);
console.log(`Округление до большего: ${Math.ceil(n)}`);
console.log(`Округление до ближайшего: ${Math.round(n)}`);

// Задание 4
const arrNums = [52, 53, 49, 77, 21, 32];
console.log(`Максимальное число из массива: ${Math.max(...arrNums)}`);
console.log(`Минимальное число из массива: ${Math.min(...arrNums)}`);

// Задание 5
const getRandom = () => Math.random() * 10;
console.log(getRandom());

// Задание 6
const getRandomArr = (num) => Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num) + 1);
console.log(getRandomArr(7));

// Задание 7
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(5, 10));

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let newDate = new Date(+currentDate + days73);
console.log(newDate);

// Задание 10
function formatDate(date) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let fullDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`;
    let fullTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(fullDate);
    console.log(fullTime);
}
formatDate(new Date());