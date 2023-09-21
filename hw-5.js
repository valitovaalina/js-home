// Задание 1
const getMin = (a, b) => (a <= b) ? a : b;
console.log(getMin(5, 5));

// Задание 2
const checkEven = (a) => (a % 2 === 0) ? 'Число четное' : 'Число нечетное';
console.log(checkEven(451));

// Задание 3
const getSquare1 = function(a) {
    console.log(a * a);
}
const getSquare2 = (a) => a * a;

getSquare1(5);
console.log(getSquare2(6));

// Задание 4
const checkUserAge = function() {
    let userAge = Number(prompt('Сколько вам лет?'));
    if (userAge < 0) {
        alert('Вы ввели неправильное значение')
    }
    else if (userAge >= 0 &&  userAge <= 12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}
checkUserAge();

// Задание 5
const getMult = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    }
    else {
        return 'Одно или оба значения не являются числом';
    }
}
console.log(getMult(5, 6));

// Задание 6
const getCube = () => {
    let userValue = prompt('Введите число');
    if (!isNaN(userValue)) {
        return `${userValue} в кубе равняется ${userValue * userValue * userValue}`;
    }
    else {
        return 'Переданный параметр не является числом';
    }
}
console.log(getCube());

// Задание 7
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

let circle1 = {
    radius: 6,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

let circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
console.log(circle1.getArea());
console.log(circle2.getArea());

function checkSeason() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        alert('Этот месяц принадлежит сезону зима');
    }
    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        alert('Этот месяц принадлежит сезону весна');
    }
    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        alert('Этот месяц принадлежит сезону лето');
    }
    else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        alert('Этот месяц принадлежит сезону осень');
    }
    else {
        alert('Что-то тебя далеко унесло');
    }
    
}