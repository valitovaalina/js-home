// Задание 1
const peopleAge = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(peopleAge.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));

// Задание 2
const peopleGender = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person['gender'] == 'male';
}

function filter(arr, cb) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]))
            output.push(arr[i]);
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(peopleGender, isMale));

// Задание 3
let timerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))