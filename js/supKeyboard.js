
// Функционал вспомогательной клавиатуры

let supKeys = $('.sup-key');

// Подсветка клавиш
function keyHighlighting(currentKey){
    if (currentKey === ' ') {
        currentKey = 'Space';
    }
    for (let i = 0; i < supKeys.length; i++){        
        if(supKeys[i].textContent === currentKey.toLowerCase()){
            supKeys[i].classList.toggle('highlighted');
            break;
        }
    }
}

// Очищение подсветки
function clearHighlighting(){
    for (let i = 0; i < supKeys.length; i++){        
        supKeys[i].classList.remove('highlighted');
    }
}