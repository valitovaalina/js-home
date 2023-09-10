let a = 10;
alert(a);
a = 20;
alert(a);

const firstIphoneYear = 2007;
alert(firstIphoneYear);

const creatorJsName = 'Brendan Eich';
alert(creatorJsName);

let first = 10;
let second = 2;
alert(`сумма: ${first + second}, разность: ${first - second}, произведение: ${first * second}, частное: ${first / second}`);

let result = 2 ** 5;
alert(result);

alert(9 % 2);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: 'Alina',
    age: 20,
    isAdmin: true,
}

user['city of residence'] = 'Ekaterinburg';

user.age = 21;

delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);