// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const firstIphoneYear = 2007;
alert(firstIphoneYear);

// Задание 3
const creatorJsName = 'Brendan Eich';
alert(creatorJsName);

// Задание 4
let first = 10;
let second = 2;
alert(`сумма: ${first + second}, разность: ${first - second}, произведение: ${first * second}, частное: ${first / second}`);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
alert(9 % 2);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9
let user = {
    name: 'Alina',
    age: 20,
    isAdmin: true,
}

// Задание 10
user['city of residence'] = 'Ekaterinburg';

// Задание 11
user.age = 21;

// Задание 12
delete user['city of residence'];

// Задание 13
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 14
let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);