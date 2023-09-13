// Задание 1
let password = 'lalala';
let userPassword = String(prompt('Введите пароль'));
(userPassword === password) ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// Задание 2
let num = 5;
(num > 0 && num < 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3
let d = 15;
let e = 150;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Этот месяц принадлежит сезону зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Этот месяц принадлежит сезону весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Этот месяц принадлежит сезону лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Этот месяц принадлежит сезону осень');
        break;
    default:
        break;
}