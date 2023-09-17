// Задание 1
for (let i = 1; i < 3; i++) {
    console.log('Привет');
}

// Задание 2
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i < 23; i++) {
    console.log(i);
}

// Задание 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (key in obj) {
    alert(`${key} — зарплата ${obj[key]} долларов.`)
}

// Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num += 1;
}
alert(`результат: ${n}, количество итераций: ${num}`);

// Задание 6
let firstFriday = 1;
for (; firstFriday < 32; firstFriday += 7) {
    alert(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`)
}