
// Функционал вспомогательной клавиатуры

let supKeys = $('.sup-key');

// Постоянная подсветка клавиш
function keyPermanentHighlighting(pressedKey){
    if (pressedKey === ' ') {
        pressedKey = 'Space';
    }
    for (let i = 0; i < supKeys.length; i++){        
        if(supKeys[i].textContent === pressedKey.toLowerCase()){
            supKeys[i].classList.remove('mistake-highlighted')
            supKeys[i].classList.add('current-highlighted');
            break;
        }
    }
}

// Краткосрочная подсветка клавиш
function keyPulseHighliting(pressedKey) {
    if (pressedKey === ' ') {
        pressedKey = 'Space'
    }
    for (let i = 0; i < supKeys.length; i++){        
        if(supKeys[i].textContent === pressedKey.toLowerCase()){
            supKeys[i].classList.add('mistake-highlighted');

            setTimeout(() => {supKeys[i].classList.remove('mistake-highlighted')}, 1000) //костыль
            break;
        }
    }
}

// Очищение подсветки выбранной клавиши
function clearKeyHighlighting(clearingKey){
    if (clearingKey === ' ') {
        clearingKey = 'Space'
    }
    for (let i = 0; i < supKeys.length; i++){
        if (supKeys[i].textContent === clearingKey.toLowerCase()) {
            supKeys[i].classList.remove('current-highlighted', 'mistake-highlighted');
            supKeys[i].classList.add('unactive')
        }        
    }
}

// Очищение подсветки всех клавиш
function clearAllHighlighting() {
    for (let i = 0; i < supKeys.length; i++) {
        supKeys[i].classList.remove('current-highlighted', 'mistake-highlighted');
        supKeys[i].classList.add('unactive');
    }
}