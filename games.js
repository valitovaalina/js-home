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

function checkRemember() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(`Запомните слова и их порядок: ${arr.join(' ')}`);
    let firstEl = prompt('Чему равнялся первый элемент массива?');
    let lastEl = prompt('Чему равнялся последний элемент массива?');
    if (firstEl.toLowerCase() === arr[0].toLowerCase() && lastEl.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert('Поздравляю! Вы верно запомнили оба слова.')
    }
    else if (firstEl.toLowerCase() === arr[0].toLowerCase() || lastEl.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы ответили неверно.');
    }
}