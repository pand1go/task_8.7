//минимальная граница

// присваивание значения по умолчанию в случае NaN
let inputMinValue = (parseInt(prompt('Минимальное знание числа для игры','0')) || 0);
// условие присваивания значений в случае введенного значения меньше -999
let minValue = (inputMinValue < -999) ? -999 : inputMinValue;

//максимальная граница

// присваивание значения по умолчанию в случае NaN
let inputMaxValue = (parseInt(prompt('Максимальное знание числа для игры','100')) || 100);
// условие присваивания значений в случае введенного значения больше 999 или меньше минимального
let maxValue = (inputMaxValue > 999 || inputMaxValue < minValue) ? 999 : inputMaxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

// расчетное число
let answerNumberCalc  = Math.floor((minValue + maxValue) / 2);
// порядковый номер вопроса
let orderNumber = 1;
// условия начала игры
let gameRun = true;

// переменная для единиц
let variableUnits = '';
// переменная для десятков
let variableTens = '';
// переменная для сотен
let variableHundreds = '';
// переменная для знака
let variableSign = '';
// число возведенное в модуль
let answerNumberAbs = Math.abs(answerNumberCalc)
// условие для знака
if (answerNumberCalc < 0){
    variableSign = 'минус';
}

// условие для единиц

if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 1){
    variableUnits = 'один';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 2){
    variableUnits = 'два';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 3){
    variableUnits = 'три';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 4){
    variableUnits = 'четыре';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 5){
    variableUnits = 'пять';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 6){
    variableUnits = 'шесть';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 7){
    variableUnits = 'семь';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 8){
    variableUnits = 'восемь';
} else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 9){
    variableUnits = 'девять';
}

// условие для десятков

if (Math.trunc(answerNumberAbs % 100 / 10) == 2){
    variableTens = 'двадцать';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 3){
    variableTens = 'тридцать';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 4){
    variableTens = 'сорок';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 5){
    variableTens = 'пятьдесят';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 6){
    variableTens = 'шестьдесят';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 7){
    variableTens = 'семьдесят';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 8){
    variableTens = 'восемьдесят';
} else if (Math.trunc(answerNumberAbs % 100 / 10) == 9){
    variableTens = 'девяносто';
} else if ((answerNumberAbs % 100) == 10){
    variableTens = 'десять';
} else if ((answerNumberAbs % 100) == 11){
    variableTens = 'одиннадцать';
} else if ((answerNumberAbs % 100) == 12){
    variableTens = 'двенадцать';
} else if ((answerNumberAbs % 100) == 13){
    variableTens = 'тринадцать';
} else if ((answerNumberAbs % 100) == 14){
    variableTens = 'четырнадцать';
} else if ((answerNumberAbs % 100) == 15){
    variableTens = 'пятнадцать';
} else if ((answerNumberAbs % 100) == 16){
    variableTens = 'шестнадцать';
} else if ((answerNumberAbs % 100) == 17){
    variableTens = 'семнадцать';
} else if ((answerNumberAbs % 100) == 18){
    variableTens = 'восемнадцать';
} else if ((answerNumberAbs % 100) == 19){
    variableTens = 'девятнадцать';
}

// условие для сотен

if (Math.trunc(answerNumberAbs / 100) == 1){
    variableHundreds = 'сто';
} else if (Math.trunc(answerNumberAbs / 100) == 2){
    variableHundreds = 'двести';
} else if (Math.trunc(answerNumberAbs / 100) == 3){
    variableHundreds = 'триста';
} else if (Math.trunc(answerNumberAbs / 100) == 4){
    variableHundreds = 'четыреста';
} else if (Math.trunc(answerNumberAbs / 100) == 5){
    variableHundreds = 'пятьсот';
} else if (Math.trunc(answerNumberAbs / 100) == 6){
    variableHundreds = 'шестьсот';
} else if (Math.trunc(answerNumberAbs / 100) == 7){
    variableHundreds = 'семьсот';
} else if (Math.trunc(answerNumberAbs / 100) == 8){
    variableHundreds = 'восемьсот';
} else if (Math.trunc(answerNumberAbs / 100) == 9){
    variableHundreds = 'девятьсот';
}

// запись числа в текстовой форме
answerNumberAbs = `${variableSign} ${variableHundreds} ${variableTens} ${variableUnits}`;
// удаление лишних пробелов
let answerNumberString = answerNumberAbs.replace(/^ +| +$|( ) +/g, "$1");
// выводимое значение
let answerNumberFinal = '';
// условие вывода
if (answerNumberString.length > 20 || answerNumberCalc == 0) {
    answerNumberFinal = answerNumberCalc;
} else {answerNumberFinal = answerNumberString;
}

// Поиск элемента текстового поля порядкового номера вопроса для дальнейшего изменения
const orderNumberField = document.getElementById('orderNumberField');
// Поиск элемента текстового поля выводимого числа для дальнейшего изменения
const answerField = document.getElementById('answerField');
// Поиск элемента текстового поля вопроса для дальнейшего изменения
const questionField = document.querySelector('#questionField');

// выбор ответных фраз

const phraseRandom = Math.round( Math.random() * 5);
const answerFrase = (phraseRandom === 1) ? 
    `Ваше число ${answerNumberFinal}, так?\n\u{1F914}` :
    (phraseRandom === 2) ?
    `Вероятно это ${answerNumberFinal}?\n\u{1F914}` :
    (phraseRandom === 3) ?
    `Это сто процентов ${answerNumberFinal}?\n\u{1F914}` :
    (phraseRandom === 4) ?
    `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}` :
    (phraseRandom === 5) ?
    `Зуб даю это ${answerNumberFinal}?\n\u{1F914}` :
    `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`;
//изменение порядкового номера вопроса
orderNumberField.innerText = orderNumber;
// изменение вопроса
answerField.innerText = answerFrase;

// БЛОК КОДА ДЛЯ КНОПКИ ЗАНОВО

document.getElementById('btnRetry').addEventListener('click', function () {
    // изменение стиля body при нажатии кнопки
    document.body.style.backgroundImage = "none";
    
    //минимальная граница

    // присваивание значения по умолчанию в случае NaN
    inputMinValue = (parseInt(prompt('Минимальное знание числа для игры','0')) || 0);
    // условие присваивания значений в случае введенного значения меньше -999
    minValue = (inputMinValue < -999) ? -999 : inputMinValue;
    
    //максимальная граница

    // присваивание значения по умолчанию в случае NaN
    inputMaxValue = (parseInt(prompt('Максимальное знание числа для игры','100')) || 100);
    // условие присваивания значений в случае введенного значения больше 999 или меньше минимального
    maxValue = (inputMaxValue > 999 || inputMaxValue < minValue) ? 999 : inputMaxValue; 

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    // расчетное число
    answerNumberCalc  = Math.floor((minValue + maxValue) / 2);
    // переменная для единиц
    variableUnits = '';
    // переменная для десятков
    variableTens = '';
    // переменная для сотен
    variableHundreds = '';
    // переменная для знака
    variableSign = '';
    // число возведенное в модуль
    answerNumberAbs = Math.abs(answerNumberCalc)
    // условие для знака
    if (answerNumberCalc < 0){
        variableSign = 'минус';
    }

    // условие для единиц

    if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 1){
        variableUnits = 'один';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 2){
        variableUnits = 'два';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 3){
        variableUnits = 'три';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 4){
        variableUnits = 'четыре';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 5){
        variableUnits = 'пять';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 6){
        variableUnits = 'шесть';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 7){
        variableUnits = 'семь';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 8){
        variableUnits = 'восемь';
    } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 9){
        variableUnits = 'девять';
    }

    // условие для десятков

    if (Math.trunc(answerNumberAbs % 100 / 10) == 2){
        variableTens = 'двадцать';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 3){
        variableTens = 'тридцать';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 4){
        variableTens = 'сорок';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 5){
        variableTens = 'пятьдесят';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 6){
        variableTens = 'шестьдесят';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 7){
        variableTens = 'семьдесят';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 8){
        variableTens = 'восемьдесят';
    } else if (Math.trunc(answerNumberAbs % 100 / 10) == 9){
        variableTens = 'девяносто';
    } else if ((answerNumberAbs % 100) == 10){
        variableTens = 'десять';
    } else if ((answerNumberAbs % 100) == 11){
        variableTens = 'одиннадцать';
    } else if ((answerNumberAbs % 100) == 12){
        variableTens = 'двенадцать';
    } else if ((answerNumberAbs % 100) == 13){
        variableTens = 'тринадцать';
    } else if ((answerNumberAbs % 100) == 14){
        variableTens = 'четырнадцать';
    } else if ((answerNumberAbs % 100) == 15){
        variableTens = 'пятнадцать';
    } else if ((answerNumberAbs % 100) == 16){
        variableTens = 'шестнадцать';
    } else if ((answerNumberAbs % 100) == 17){
        variableTens = 'семнадцать';
    } else if ((answerNumberAbs % 100) == 18){
        variableTens = 'восемнадцать';
    } else if ((answerNumberAbs % 100) == 19){
        variableTens = 'девятнадцать';
    }

    // условие для сотен

    if (Math.trunc(answerNumberAbs / 100) == 1){
        variableHundreds = 'сто';
    } else if (Math.trunc(answerNumberAbs / 100) == 2){
        variableHundreds = 'двести';
    } else if (Math.trunc(answerNumberAbs / 100) == 3){
        variableHundreds = 'триста';
    } else if (Math.trunc(answerNumberAbs / 100) == 4){
        variableHundreds = 'четыреста';
    } else if (Math.trunc(answerNumberAbs / 100) == 5){
        variableHundreds = 'пятьсот';
    } else if (Math.trunc(answerNumberAbs / 100) == 6){
        variableHundreds = 'шестьсот';
    } else if (Math.trunc(answerNumberAbs / 100) == 7){
        variableHundreds = 'семьсот';
    } else if (Math.trunc(answerNumberAbs / 100) == 8){
        variableHundreds = 'восемьсот';
    } else if (Math.trunc(answerNumberAbs / 100) == 9){
        variableHundreds = 'девятьсот';
    }

    // запись числа в текстовой форме
    answerNumberAbs = `${variableSign} ${variableHundreds} ${variableTens} ${variableUnits}`;
    // удаление лишних пробелов
    answerNumberString = answerNumberAbs.replace(/^ +| +$|( ) +/g, "$1");
    // выводимое значение
    answerNumberFinal = '';
    // условие вывода
    if (answerNumberString.length > 20 || answerNumberCalc == 0) {
        answerNumberFinal = answerNumberCalc;
    } else {answerNumberFinal = answerNumberString;
    }
    // значение порядкового номера    
    orderNumber = 1;
    // условие началы игры
    gameRun = true;
    // изменение порядкового номера вопроса
    orderNumberField.innerText = orderNumber;
    // выбор ответных фраз
    const phraseRandom = Math.round( Math.random() * 5);
    const answerFrase = (phraseRandom === 1) ? 
        `Ваше число ${answerNumberFinal}, так?\n\u{1F914}` :
        (phraseRandom === 2) ?
        `Вероятно это ${answerNumberFinal}?\n\u{1F914}` :
        (phraseRandom === 3) ?
        `Это сто процентов ${answerNumberFinal}?\n\u{1F914}` :
        (phraseRandom === 4) ?
        `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}` :
        (phraseRandom === 5) ?
        `Зуб даю это ${answerNumberFinal}?\n\u{1F914}` :
        `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`;
    // изменение вопроса
    answerField.innerText = answerFrase;
})

// БЛОК КОДА ДЛЯ КНОПКИ БОЛЬШЕ

document.getElementById('btnOver').addEventListener('click', function () {
    // изменение стиля body при нажатии кнопки
    document.body.style.backgroundImage = "url('images/arrowup.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    if (gameRun){
        if (minValue === maxValue){
            // изменение стиля body при проигрыше
            document.body.style.backgroundImage = "url('images/gameover.png')";
            document.body.style.backgroundPosition = "top";
            document.body.style.backgroundSize = "contain";
            const phraseRandomFail = Math.round( Math.random() * 4);
            const answerPhraseFail = (phraseRandomFail === 1) ?
                `Вы загадали неправильное число!\n\u{1F644}` :
                (phraseRandom === 2) ?
                `Я чувствую где-то подвох\n\u{1F624}` :
                (phraseRandom === 3) ?
                `Вы точно загадали число?\n\u{1F611}` :
                (phraseRandom === 4) ?
                `Это невозможно..\n\u{1F621}` :
                `Я сдаюсь..\n\u{1F62D}`;

            answerField.innerText = answerPhraseFail;
            // изменение значения поля вопроса
            questionField.innerText = 'Игра окончена!'
            gameRun = false;
        } else {
            minValue = answerNumberCalc + 1;
            // расчетное число
            answerNumberCalc  = Math.floor((minValue + maxValue) / 2);
            // переменная для единиц
            variableUnits = '';
            // переменная для десятков
            variableTens = '';
            // переменная для сотен
            variableHundreds = '';
            // переменная для знака
            variableSign = '';
            // число возведенное в модуль
            answerNumberAbs = Math.abs(answerNumberCalc)
            // условие для знака
            if (answerNumberCalc < 0){
                variableSign = 'минус';
            }

            // условие для единиц

            if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 1){
                variableUnits = 'один';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 2){
                variableUnits = 'два';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 3){
                variableUnits = 'три';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 4){
                variableUnits = 'четыре';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 5){
                variableUnits = 'пять';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 6){
                variableUnits = 'шесть';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 7){
                variableUnits = 'семь';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 8){
                variableUnits = 'восемь';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 9){
                variableUnits = 'девять';
            }

            // условие для десятков

            if (Math.trunc(answerNumberAbs % 100 / 10) == 2){
                variableTens = 'двадцать';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 3){
                variableTens = 'тридцать';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 4){
                variableTens = 'сорок';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 5){
                variableTens = 'пятьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 6){
                variableTens = 'шестьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 7){
                variableTens = 'семьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 8){
                variableTens = 'восемьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 9){
                variableTens = 'девяносто';
            } else if ((answerNumberAbs % 100) == 10){
                variableTens = 'десять';
            } else if ((answerNumberAbs % 100) == 11){
                variableTens = 'одиннадцать';
            } else if ((answerNumberAbs % 100) == 12){
                variableTens = 'двенадцать';
            } else if ((answerNumberAbs % 100) == 13){
                variableTens = 'тринадцать';
            } else if ((answerNumberAbs % 100) == 14){
                variableTens = 'четырнадцать';
            } else if ((answerNumberAbs % 100) == 15){
                variableTens = 'пятнадцать';
            } else if ((answerNumberAbs % 100) == 16){
                variableTens = 'шестнадцать';
            } else if ((answerNumberAbs % 100) == 17){
                variableTens = 'семнадцать';
            } else if ((answerNumberAbs % 100) == 18){
                variableTens = 'восемнадцать';
            } else if ((answerNumberAbs % 100) == 19){
                variableTens = 'девятнадцать';
            }

            // условие для сотен

            if (Math.trunc(answerNumberAbs / 100) == 1){
                variableHundreds = 'сто';
            } else if (Math.trunc(answerNumberAbs / 100) == 2){
                variableHundreds = 'двести';
            } else if (Math.trunc(answerNumberAbs / 100) == 3){
                variableHundreds = 'триста';
            } else if (Math.trunc(answerNumberAbs / 100) == 4){
                variableHundreds = 'четыреста';
            } else if (Math.trunc(answerNumberAbs / 100) == 5){
                variableHundreds = 'пятьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 6){
                variableHundreds = 'шестьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 7){
                variableHundreds = 'семьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 8){
                variableHundreds = 'восемьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 9){
                variableHundreds = 'девятьсот';
            }

            // запись числа в текстовой форме
            answerNumberAbs = `${variableSign} ${variableHundreds} ${variableTens} ${variableUnits}`;
            // удаление лишних пробелов
            answerNumberString = answerNumberAbs.replace(/^ +| +$|( ) +/g, "$1");
            // выводимое значение
            answerNumberFinal = '';
            // условие вывода
            if (answerNumberString.length > 20 || answerNumberCalc == 0) {
                answerNumberFinal = answerNumberCalc;
            } else {answerNumberFinal = answerNumberString;
            }
            // изменение порядкового номера вопроса
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // выбор ответной фразы
            const phraseRandom = Math.round( Math.random() * 5);
            const answerFrase = (phraseRandom === 1) ? 
                `Ваше число ${answerNumberFinal}, так?\n\u{1F914}` :
                (phraseRandom === 2) ?
                `Вероятно это ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 3) ?
                `Это сто процентов ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 4) ?
                `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 5) ?
                `Зуб даю это ${answerNumberFinal}?\n\u{1F914}` :
                `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`;
            answerField.innerText = answerFrase;
        }
    }
})

// БЛОК КОДА ДЛЯ КНОПКИ МЕНЬШЕ

document.getElementById('btnLess').addEventListener('click', function () {
    // изменение стиля body при нажатии кнопки
    document.body.style.backgroundImage = "url('images/arrowdown.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    if (gameRun){
        if (minValue === maxValue){
            // изменение стиля body при проигрыше
            document.body.style.backgroundImage = "url('images/gameover.png')";
            document.body.style.backgroundPosition = "top";
            document.body.style.backgroundSize = "contain";
            // выбор фраз
            const phraseRandomFail = Math.round( Math.random() * 4);
            const answerPhraseFail = (phraseRandomFail === 1) ?
                `Вы загадали неправильное число!\n\u{1F644}` :
                (phraseRandom === 2) ?
                `Я чувствую где-то подвох\n\u{1F624}` :
                (phraseRandom === 3) ?
                `Вы точно загадали число?\n\u{1F611}` :
                (phraseRandom === 4) ?
                `Это невозможно..\n\u{1F621}` :
                `Я сдаюсь..\n\u{1F62D}`;

            answerField.innerText = answerPhraseFail;
            questionField.innerText = 'Игра окончена!'
            gameRun = false;
        } else {
            // изменение границ расчета на меньшие 
            maxValue = answerNumberCalc - 1;
            // расчетное число
            answerNumberCalc = Math.ceil((minValue + maxValue) / 2);
            // переменная для единиц
            variableUnits = '';
            // переменная для десятков
            variableTens = '';
            // переменная для сотен
            variableHundreds = '';
            // переменная для знака
            variableSign = '';
            // число возведенное в модуль
            answerNumberAbs = Math.abs(answerNumberCalc)
            // условие для знака
            if (answerNumberCalc < 0){
                variableSign = 'минус';
            }

            // условие для единиц

            if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 1){
                variableUnits = 'один';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 2){
                variableUnits = 'два';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 3){
                variableUnits = 'три';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 4){
                variableUnits = 'четыре';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 5){
                variableUnits = 'пять';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 6){
                variableUnits = 'шесть';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 7){
                variableUnits = 'семь';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 8){
                variableUnits = 'восемь';
            } else if (!(answerNumberAbs > 10 && answerNumberAbs < 20) && !(answerNumberAbs % 100 > 10 && answerNumberAbs % 100 < 20) && answerNumberAbs % 10 == 9){
                variableUnits = 'девять';
            }

            // условие для десятков

            if (Math.trunc(answerNumberAbs % 100 / 10) == 2){
                variableTens = 'двадцать';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 3){
                variableTens = 'тридцать';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 4){
                variableTens = 'сорок';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 5){
                variableTens = 'пятьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 6){
                variableTens = 'шестьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 7){
                variableTens = 'семьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 8){
                variableTens = 'восемьдесят';
            } else if (Math.trunc(answerNumberAbs % 100 / 10) == 9){
                variableTens = 'девяносто';
            } else if ((answerNumberAbs % 100) == 10){
                variableTens = 'десять';
            } else if ((answerNumberAbs % 100) == 11){
                variableTens = 'одиннадцать';
            } else if ((answerNumberAbs % 100) == 12){
                variableTens = 'двенадцать';
            } else if ((answerNumberAbs % 100) == 13){
                variableTens = 'тринадцать';
            } else if ((answerNumberAbs % 100) == 14){
                variableTens = 'четырнадцать';
            } else if ((answerNumberAbs % 100) == 15){
                variableTens = 'пятнадцать';
            } else if ((answerNumberAbs % 100) == 16){
                variableTens = 'шестнадцать';
            } else if ((answerNumberAbs % 100) == 17){
                variableTens = 'семнадцать';
            } else if ((answerNumberAbs % 100) == 18){
                variableTens = 'восемнадцать';
            } else if ((answerNumberAbs % 100) == 19){
                variableTens = 'девятнадцать';
            }

            // условие для сотен

            if (Math.trunc(answerNumberAbs / 100) == 1){
                variableHundreds = 'сто';
            } else if (Math.trunc(answerNumberAbs / 100) == 2){
                variableHundreds = 'двести';
            } else if (Math.trunc(answerNumberAbs / 100) == 3){
                variableHundreds = 'триста';
            } else if (Math.trunc(answerNumberAbs / 100) == 4){
                variableHundreds = 'четыреста';
            } else if (Math.trunc(answerNumberAbs / 100) == 5){
                variableHundreds = 'пятьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 6){
                variableHundreds = 'шестьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 7){
                variableHundreds = 'семьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 8){
                variableHundreds = 'восемьсот';
            } else if (Math.trunc(answerNumberAbs / 100) == 9){
                variableHundreds = 'девятьсот';
            }

            // запись числа в текстовой форме
            answerNumberAbs = `${variableSign} ${variableHundreds} ${variableTens} ${variableUnits}`;
            // удаление лишних пробелов
            answerNumberString = answerNumberAbs.replace(/^ +| +$|( ) +/g, "$1");
            // выводимое значение
            answerNumberFinal = '';
            // условие вывода
            if (answerNumberString.length > 20 || answerNumberCalc == 0) {
                answerNumberFinal = answerNumberCalc;
            } else {answerNumberFinal = answerNumberString;
            }
            // изменение порядкового номера вопроса
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // выбор ответных фраз
            const phraseRandom = Math.round( Math.random() * 5);
            const answerFrase = (phraseRandom === 1) ? 
                `Ваше число ${answerNumberFinal}, так?\n\u{1F914}` :
                (phraseRandom === 2) ?
                `Вероятно это ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 3) ?
                `Это сто процентов ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 4) ?
                `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}` :
                (phraseRandom === 5) ?
                `Зуб даю это ${answerNumberFinal}?\n\u{1F914}` :
                `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`;
            answerField.innerText = answerFrase;
        }
    }
})

// БЛОК КОДА ДЛЯ КНОПКИ ВЕРНО

document.getElementById('btnEqual').addEventListener('click', function () {
    // изменение стиля body при нажатии кнопки
    document.body.style.backgroundImage = "url('images/victory.png')";
    document.body.style.backgroundPosition = "top left 50%";
    document.body.style.backgroundSize = "50%";
    if (gameRun){
        // выбор ответных фраз
        const phraseRandomLuck = Math.round( Math.random() * 5);
        const answerFraseLuck = (phraseRandomLuck === 1) ? 
            `Урааа, я угадал!\n\u{1F929}` :
            (phraseRandom === 2) ?
            `Сила бинарного поиска воочию!\n\u{1F913}` :
            (phraseRandom === 3) ?
            `Я же сказал, что угадаю\n\u{1F643}` :
            (phraseRandom === 4) ?
            `Изи катка!\n\u{1F60F}` :
            (phraseRandom === 5) ?
            `Что ты на это скажешь, кожаный мешок?\n\u{1F61D}` :
            `Я всегда угадываю\n\u{1F60E}`;
        answerField.innerText = answerFraseLuck;
        // изменение тектового поля вопроса
        questionField.innerText = 'Игра окончена!'
        gameRun = false;
    }
})