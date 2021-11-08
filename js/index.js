let startButton = $('.start-button');

// Привязка основной функции к кнопке "Старт"
startButton.click(() => {
    $('.start-title').html('Restart'); // Смена надписи на кнопке
    start();
});

let timerID;

//Основной алгоритм тренажёра
async function start(){
    // Запрос текста
    await generate();

    // Определение переменных
    let taps = 0,
        letters = $('.letter'),
        current = 0,

        timer = 0,

        speed = 0,
        speedField = $('.speed').html(speed)
        
        accuracy = 100;
        accuracyField = $('.accuracy').html(`${accuracy}%`)
    
    // Включение подсветки первой буквы текста на вспом. клавиатуре
    letters[current].classList.add('current'); // Определение первой буквы текста как 'текущей'
    clearAllHighlighting(); // Очистка всех подсвеченных кнопок на вспом. клавиатуре
    keyPermanentHighlighting(letters[current].textContent); // Подсветка её на вспом. клавиатуре

    // Запуск таймера
    if (typeof timerID !== 'undefined'){
        clearInterval(timerID);        
    }

    timerID = setInterval(() => {
        // Скорость печати
        timer++;
        speed = current / timer * 60;
        speedField.html(speed.toFixed());
    }, 1000);

    // Обработчик события нажатия на клавишу
    $(document).off('keydown').on('keydown', (event) => {  // ненадёжный фрагмент
        // Исключение обработки клавиши 'Shift'
        if (event.key !== 'Shift') {
            // Обработка верно нажатой клавиши
            if(event.key === letters[current].textContent){
                letters[current].classList.remove('current', 'mistake');
                letters[current].classList.add('passed');
                clearKeyHighlighting(event.key);

                current++;

                keyPermanentHighlighting(letters[current].textContent);
                letters[current].classList.add('current');
            }
            // Обработка неверно нажатой клавиши
            else {
                letters[current].classList.add('mistake');
                keyPulseHighliting(event.key)
            }
            
            // Счётчик нажатий и точность печати
            taps++;
            accuracy = current / taps * 100;
            accuracyField.html(`${accuracy.toFixed()}%`);      
        }
    });
    

}
