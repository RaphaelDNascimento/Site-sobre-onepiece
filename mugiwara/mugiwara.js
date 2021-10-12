const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    
    const now = new Date();

    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' || ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());


    document.getElementById('res').innerHTML = dataHora;
}, 1000);

    
    var kk = new Date()
    var kk2 = kk.getHours()
    if(kk2 >= 3 && kk2 <= 19){
        var foot = document.getElementById('foot')
        foot.style.backgroundColor='white'
        var cabecaa = document.querySelector('header')
        cabecaa.style.backgroundColor='white'
        var cabecinha = document.querySelector('a')
        cabecinha.style.color='black'
    }
    