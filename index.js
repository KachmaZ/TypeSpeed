async function startGame(){
    startButton.prop("disabled", true);
    await generate();
    let letters = $(".letter"),
        current = 0,
        taps = 0,
        timer = 0,
        speed = 0,
        accuracy = '-';
    setInterval(() => {
        timer++;
        speed = current / timer * 60;
    }, 1000)
    letters[current].classList.add('current');
    $(document).unbind('keydown');
    $(document).on("keydown", (event) => {
        if (event.key !== 'Shift') {
            if(event.key === letters[current].textContent){
                letters[current].classList.remove('current', 'mistake');
                letters[current].classList.add('passed');
                current++;
                letters[current].classList.add('current');
            }
            else {
                letters[current].classList.add('mistake');
            }
            taps++;
            accuracy = current / taps * 100;
            $('.type-accuracy').html(accuracy.toFixed(2));
            $('.type-speed').html(speed.toFixed());
        }
    });

}

let startButton = $(".start");
startButton.click(startGame);