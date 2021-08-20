
    const relogio = document.querySelector('.relogio')
    let segundos = 0 ;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML=criarHorasDosSegundos(segundos);
        },1000)
    }
    function criarHorasDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone:'UTC'
        });
    }

    document.getElementById('btnIniciar').addEventListener('click',Iniciar);
    function Iniciar(){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }

    document.getElementById('btnPausar').addEventListener('click',Pausar);
    function Pausar(){
        relogio.classList.add('pausado')
        clearInterval(timer);
    }

    document.getElementById('btnZerar').addEventListener('click',Resetar);
    function Resetar(){
        clearInterval(timer);
        relogio.classList.remove('pausado')
        relogio.innerHTML='00:00:00';
        segundos=0;
    }


   