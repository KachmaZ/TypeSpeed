async function generate() {
    let text = await getText();
    $("#text-field").html('');
    if (text.length > 0){
        for (let i = 0; i < text.length; i++){
            if (!(text[i] === ' ' && text[i-1] === ' ')){
                $(".type-field").append(`<span class="letter">${text[i]}</span>`);
            }
        }
    }
}

