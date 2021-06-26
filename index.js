async function startGame(){
    $('.start').prop("disabled", true);
    await generate();
    letters = $(".letter"),
    setInterval(() => {
        timer++;
        speed = current / timer * 60;
    $('.type-speed').html(speed.toFixed());
    }, 1000)
    letters[current].classList.add('current');
    keyHighlighting(letters[current].textContent)
}

function keyHighlighting(currentKey){
    console.log('"' + currentKey + '"');
    if (currentKey === ' ') {
        currentKey = 'Space';
        console.log('Space')
    }

    for (let i = 0; i < supKeys.length; i++){        
        if(supKeys[i].textContent === currentKey.toLowerCase()){
            supKeys[i].classList.toggle('highlighted');
            break;
        }
    }
}

let taps = 0,
    letters = '',
    current = 0,
    timer = 0,
    speed = 0,
    accuracy = '-';

let supKeys = $('.sup-key');

$(document).on('keydown', (event) => {
    if (event.key !== 'Shift') {
        if(event.key === letters[current].textContent){
            letters[current].classList.remove('current', 'mistake');
            letters[current].classList.add('passed');
            keyHighlighting(letters[current].textContent);
            current++;            
            keyHighlighting(letters[current].textContent);
            letters[current].classList.add('current');
        }
        else {
            letters[current].classList.add('mistake');
        }
        taps++;
        accuracy = current / taps * 100;
        $('.type-accuracy').html(accuracy.toFixed(2));
    }
});


$(".start").click(startGame);