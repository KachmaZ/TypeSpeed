
//Основной алгоритм тренажёра
async function start(){
    
    // Ззапрос текста
    await generate();

    // Определение переменных
    let taps = 0,
        letters = $('.letter'),
        current = 0,
        timer = 0,
        speed = 0,
        accuracy = '-';
    
    // Включение подсветки первой буквы текста на вспом. клавиатуре
    letters[current].classList.add('current'); // Определение первой буквы текста как текущей
    keyHighlighting(letters[current].textContent); // Подсветка её на вспом. клавиатуре

    // Запуск таймера
    let timerID = setInterval(() => {
        // Скорость печати
        timer++;
        speed = current / timer * 60;
        $('.speed').html(speed.toFixed());
    }, 1000);

    // Переопределение события кнопки на рестарт
    $('.start-button').off('click');
    $('.start-button').click(async()=> {
        // Остановка таймера
        clearInterval(timerID);

        // Запрос нового текста
        await generate();
        
        // Переопределение переменных и показателей печати
        taps = 0,
        letters = $('.letter'),
        current = 0,
        timer = 0,
        speed = 0,
        accuracy = '-';
        $('.speed').html('0')
        $('.accuracy').html('100%')
        
        // Смена подсветки первой буквы текста на вспом. клавиатуре
        letters[current].classList.add('current');
        clearHighlighting(); // Очистка всех подсвеченных кнопок на вспом. клавиатуре
        keyHighlighting(letters[current].textContent);

        // Запуск нового таймера
        timerID = setInterval(() => {
            // Скорость печати
            timer++;
            speed = current / timer * 60;
        $('.speed').html(speed.toFixed());
        }, 1000)
    });

    // Обработчик события нажатия на клавишу
    $(document).on('keydown', (event) => {
        // Исключение обработки клавиши 'Shift'
        if (event.key !== 'Shift') {
            // Обработка верно нажатой клавиши
            if(event.key === letters[current].textContent){
                letters[current].classList.remove('current', 'mistake');
                letters[current].classList.add('passed');
                keyHighlighting(letters[current].textContent);
                current++;            
                keyHighlighting(letters[current].textContent);
                letters[current].classList.add('current');
            }
            // Обработка неверно нажатой клавиши
            else {
                letters[current].classList.add('mistake');
            }
            
            // Счётчик нажатий и точность печати
            taps++;
            accuracy = current / taps * 100;
            $('.accuracy').html(`${accuracy.toFixed()}%`);      
        }
    });
    

}

// Привязка основной функции к кнопке "Старт"
$('.start-button').click(() => {
    $('.start-title').html('Restart');
    start();
});
