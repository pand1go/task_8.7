
// Блок констант с html-элементами 

const orderNumberField = document.querySelector('#orderNumberField'); // Изменение поля порядкого номера вопроса
const answerField = document.querySelector('#answerField'); // Изменение поля вопроса
const questionField = document.querySelector('#questionField'); // Изменение поля ответа
const arrowSet = document.querySelector('.arrow'); // Элемент для задания backgound-image
const inputMinVal = document.querySelector('.min-val'); // Поле для ввода минимального значения
const inputMaxVal = document.querySelector('.max-val');  // Поле для ввода максимального значения
const btnMinVal = document.querySelector('#button-addon1'); // Кнопка для определения минимального значения
const btnMaxVal = document.querySelector('#button-addon2'); // Кнопка для определения максимального значения
const textAttention = document.querySelector('.attention'); // Изменение поля текста над input 
const inputGroup = document.querySelectorAll('.input-group'); // Блоки элементов ввода для их скрытия
const changeContent = document.querySelector('.change-content'); // Блок всех элементов ввода для скрытия
const btnStart = document.querySelector('.btn-block'); // Кнопка запуска игры
const accordion = document.querySelector('#accordionExample'); // Блок элементов accordion для скрытия при запуске игры
const gameCard = document.querySelector('.game'); // Блок элементов карточки с игрой для скрытия при вводе параметров игры
const startGameText = document.querySelector('.startGameText'); // Поле для вывода текста с границами чисел перед началом игры

// Блок переменных

let inputMinValue = ''; // Значение введеное в поле min input
let minValue = ''; // Финальное минимальное значение с учетом ограничений
let inputMaxValue = ''; // Значение введеное в поле max input
let maxValue = ''; // Финальное максимальное значение с учетом ограничений
let answerNumberCalc = ''; // Расчетное число для ответа
let orderNumber = ''; // Порядковый номер вопроса
let gameRun = ''; // Условие начала игры
let answerNumberAbs = ''; /// Расчетное число в модуле
let variableSign = ''; // Переменная для знака
let answerNumberString = ''; // Переменная для записи числа прописью
let answerNumberFinal = ''; // Переменная для финального вывода числа в ответе
let answerPhrase = ''; // Переменная для ответных фраз
let phraseRandom = ''; // Переменная для рандомной ответной фразы
let answerPhraseFail = ''; // Переменная для ответных фраз в случае проигрыша
let phraseRandomFail = ''; // Переменная для рандомной ответной фразы в случае проигрыша
let answerPhraseLuck = ''; // Переменная для ответных фраз в случае выигрыша
let phraseRandomLuck = ''; // Переменная для рандомной ответной фразы в случае выигрыша

//Функция перевода из числовой записи в буквенную

const convertingNumber = (number) => {
    const
        hundreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        tens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        units = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        tensTo20 = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = number.toString(), out = '';

    if(str.length == 1) {
      return units[number-1];
    } else if(str.length == 2){
        if (str[0] == 1 && str[1] != 0) {
          out = tensTo20[parseInt(str[1])-1];
        } else if (str == 10) {
          out = tens[0];
        } else {
          out = (tens[parseInt(str[0])-1] + ((str[1] != 0) ? (' ' + units[parseInt(str[1])-1]) : ''));
        }
    } else if (str.length == 3){
        if (str[1] == 1 && str[2] != 0) {
          out = (hundreds[parseInt(str[0])-1] + ' ' + tensTo20[parseInt(str[2])-1]);
        } else if (str[1] == 1 && str[2] == 0) {
          out = (hundreds[parseInt(str[0])-1] + ' ' + tens[0]);
        } else {
          out = (hundreds[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + tens[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + units[parseInt(str[2])-1]):''));
        }
    }
    return out;
}

// Набор повторяющихся команд для кнопок "больше" "меньше"

const repeatInctruction = () => {
            answerNumberAbs = Math.abs(answerNumberCalc)
            variableSign = (answerNumberCalc < 0) ? 'минус' : '';  
            answerNumberString = `${variableSign} ${convertingNumber(answerNumberAbs)}`
            answerNumberFinal = (answerNumberString.length > 20 || answerNumberCalc == 0) ? answerNumberCalc : answerNumberString;            
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerPhrase = [`Ваше число ${answerNumberFinal}, так?\n\u{1F914}`, `Вероятно это ${answerNumberFinal}?\n\u{1F914}`, `Это сто процентов ${answerNumberFinal}?\n\u{1F914}`, `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}`, `Зуб даю это ${answerNumberFinal}?\n\u{1F914}`, `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`];
            phraseRandom = answerPhrase[Math.round( Math.random() * (answerPhrase.length - 1))];
            answerField.innerText = phraseRandom;
        }

// Кнопка для задания минимального значения в игре

btnMinVal.addEventListener('click', () => {
    if (!inputMinVal.value) {
        textAttention.style.color = 'red';
        textAttention.innerText = 'Пока не введете значение не начнем!'
    } else {
        inputMinValue = parseInt(inputMinVal.value) || 0;
        minValue = (inputMinValue < -999) ? -999 : inputMinValue;
        for (let i = 0; i < inputGroup.length; i++) inputGroup[i].classList.toggle("hidden");
        textAttention.style.color = 'black';
        textAttention.innerText = 'Введите максимальное значение числа для игры';
        inputMinVal.value = '';
    }
})

// Кнопка для задания максимального значения в игре

btnMaxVal.addEventListener('click', () => {
    if (!inputMaxVal.value) {
        textAttention.style.color = 'red';
        textAttention.innerText = 'Пока не введете значение не начнем!'
    } else {
        inputMaxValue = parseInt(inputMaxVal.value) || 100;
        maxValue = (inputMaxValue > 999 || inputMaxValue < minValue) ? 999 : inputMaxValue;
        changeContent.classList.toggle('hidden');
        btnStart.classList.toggle('hidden');
        startGameText.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
        startGameText.classList.toggle('hidden');
        textAttention.innerText = 'Введите минимальное значение числа для игры'
        textAttention.style.color = 'black';
        inputMaxVal.value = '';
    }
})

// Кнопка для начала игры

btnStart.addEventListener('click', () => {
    accordion.classList.toggle("hidden");
    gameCard.classList.toggle('hidden');
    startGame();
})

// Алгоритм вычисления ответного значения числа при начале игры

const startGame = () => {
    answerNumberCalc  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    answerNumberAbs = Math.abs(answerNumberCalc)
    variableSign = (answerNumberCalc < 0) ? 'минус' : '';    
    answerNumberString = `${variableSign} ${convertingNumber(answerNumberAbs)}`
    answerNumberFinal = (answerNumberString.length > 20 || answerNumberCalc == 0) ? answerNumberCalc : answerNumberString;
    answerPhrase = [`Ваше число ${answerNumberFinal}, так?\n\u{1F914}`, `Вероятно это ${answerNumberFinal}?\n\u{1F914}`, `Это сто процентов ${answerNumberFinal}?\n\u{1F914}`, `Я не уверен но возможно это ${answerNumberFinal}?\n\u{1F914}`, `Зуб даю это ${answerNumberFinal}?\n\u{1F914}`, `Вы загадали число ${answerNumberFinal}?\n\u{1F914}`];
    phraseRandom = answerPhrase[Math.round( Math.random() * (answerPhrase.length - 1))];
    orderNumberField.innerText = orderNumber;
    answerField.innerText = phraseRandom;
}

// БЛОК КОДА ДЛЯ КНОПКИ ЗАНОВО

document.getElementById('btnRetry').addEventListener('click', () => {
    arrowSet.style.backgroundImage = "none";
    gameCard.classList.toggle('hidden');
    accordion.classList.toggle("hidden");
    btnStart.classList.toggle('hidden');
    startGameText.classList.toggle('hidden');
    changeContent.classList.toggle('hidden');
    for (let i = 0; i < inputGroup.length; i++) inputGroup[i].classList.toggle("hidden");
    questionField.innerText = 'Вопрос №';
});

// БЛОК КОДА ДЛЯ КНОПКИ БОЛЬШЕ

document.getElementById('btnOver').addEventListener('click', function () {
    arrowSet.style.backgroundImage = "url('images/arrowup.jpg')";
    arrowSet.style.backgroundSize = 'contain';
    if (gameRun){
        if (minValue === maxValue){
            arrowSet.style.backgroundImage = "url('images/gameover.png')";
            arrowSet.style.backgroundPosition = "center top";
            answerPhraseFail = [`Вы загадали неправильное число!\n\u{1F644}`, `Я чувствую где-то подвох\n\u{1F624}`, `Вы точно загадали число?\n\u{1F611}`, `Это невозможно..\n\u{1F621}`, `Я сдаюсь..\n\u{1F62D}`];
            phraseRandomFail = answerPhraseFail[Math.round( Math.random() * (answerPhraseFail.length-1))];
            answerField.innerText = phraseRandomFail;
            questionField.innerText = 'Игра окончена!'
            orderNumberField.innerText = '';
            gameRun = false;
        } else {
            minValue = answerNumberCalc + 1;
            answerNumberCalc  = Math.floor((minValue + maxValue) / 2);
            repeatInctruction();
        }
    }
})

// БЛОК КОДА ДЛЯ КНОПКИ МЕНЬШЕ

document.getElementById('btnLess').addEventListener('click', function () {
    arrowSet.style.backgroundImage = "url('images/arrowdown.jpg')";
    arrowSet.style.backgroundSize = 'contain';
    if (gameRun){
        if (minValue === maxValue){
            arrowSet.style.backgroundImage = "url('images/gameover.png')";
            arrowSet.style.backgroundPosition = "center top";
            answerPhraseFail = [`Вы загадали неправильное число!\n\u{1F644}`, `Я чувствую где-то подвох\n\u{1F624}`, `Вы точно загадали число?\n\u{1F611}`, `Это невозможно..\n\u{1F621}`, `Я сдаюсь..\n\u{1F62D}`];
            phraseRandomFail = answerPhraseFail[Math.round( Math.random() * (answerPhraseFail.length-1))];
            answerField.innerText = phraseRandomFail;
            questionField.innerText = 'Игра окончена!'
            orderNumberField.innerText = '';
            gameRun = false;
        } else {
            maxValue = answerNumberCalc - 1;
            answerNumberCalc  = Math.ceil((minValue + maxValue) / 2);
            repeatInctruction();
        }
    }
})

// БЛОК КОДА ДЛЯ КНОПКИ ВЕРНО

document.getElementById('btnEqual').addEventListener('click', function () {
    arrowSet.style.backgroundImage = "url('images/victory.png')";
    arrowSet.style.backgroundPosition = "center top";
    arrowSet.style.backgroundSize = "80%";
    if (gameRun){
        answerPhraseLuck = [`Урааа, я угадал!\n\u{1F929}`, `Сила бинарного поиска воочию!\n\u{1F913}`, `Я же сказал, что угадаю\n\u{1F643}`, `Изи катка!\n\u{1F60F}`, `Что ты на это скажешь, кожаный мешок?\n\u{1F61D}`, `Я всегда угадываю\n\u{1F60E}`]; 
        phraseRandomLuck = answerPhraseLuck[Math.round( Math.random() * (answerPhraseLuck.length - 1))];
        answerField.innerText = phraseRandomLuck;
        questionField.innerText = 'Игра окончена!'
        orderNumberField.innerText = '';
        gameRun = false;
    }
})