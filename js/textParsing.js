
// Запрос текста с сервиса 'Baconipsum'

function getText() {
    return new Promise(function (resolve, reject){
        $.getJSON('https://baconipsum.com/api/?callback=?',
            { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' }, function(baconGoodness){
                resolve(baconGoodness[0]);
            }
        )
    })
}

