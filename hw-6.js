// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] == 10) {
        break;
    }
}

// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// Задание 4
const arr4 = [];
for (i = 0; i < 3; i++) {
    arr4[i] = [];
    for (j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    }
}
console.log(arr4);

// Задание 5
const arr5 = [1, 1, 1];
console.log(arr5.concat([2, 2, 2]));

// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort().pop()
console.log(arr6);

// Задание 7
const arr7 = [9, 8, 7, 6, 5];
let userValue = prompt('Угадайте число');
if (arr7.includes(Number(userValue))) {
    alert('Угадал');
}
else {
    alert('Не угадал');
}

// Задание 8
const str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 9
const arr9 = [[1, 2, 3,], [4, 5, 6]];
const result = [];
for (i of arr9) {
    for (j of i) {
        result.push(j);
    }
}
console.log(result);

// Задание 10
const arr10 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr10.length; i++) {
    if (i != arr10.length - 1) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

// Задание 11
const arr11 = [1, 2, 3, 4, 5, 6];
const getSquare = arr => arr.map((x) => x * x);
console.log(getSquare(arr11));

// Задание 12
const arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = arr => arr.map((x) => x.length);
console.log(getLengthWords(arr12));

// Задание 13
const arr13 = [-1, 0, 5, -10, 56];
const filterPositive = arr => arr.filter((x) => x < 0);
console.log(filterPositive(arr13));