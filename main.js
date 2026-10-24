let start = document.querySelector('#numero');
let btnStart = document.querySelector('#start');
let btnPausa = document.querySelector('#pausa');
let btnStop = document.querySelector('#stop');
let result = document.querySelector('#risultato');

//creo una variabile d'appoggio che mi aiuti a tenere salvato il tempo nel caso venga fermato

let tempo = 0;

//assegno un valore iniziale pari a 0 all'intervalo così da poterla usare nelle funzioni
let interval = 0;

//creazione della funzione di countdown,inserendo i 3 elementi necessari
function conta() {
    
    
    
    //questo if mi serve per non far partire il timer ogni volta che premo start, così da non far sovrappore lo spam di timer
    if (interval !== 0) {
        alert(`C'è gia un timer attivo. attendi che finisca!!`);
        return;
    };

    if(start.value === ''){
        alert('Inserisci un tempo da cui partire!!');
        return;
    }
    
    //con questo if nel caso non ci sia un tempo salvato, utilizzando le altre funzioni, vado ad assegnarli il valore del tempo da me inserito nella variabile start
    if (tempo <= 0) {
        tempo = start.value;
    };
    
    result.innerHTML = tempo;
    
    //creo il setInterval appogiandomi sulla variabile, dove dovrò fare il countdown partendo da  tempo che inserisco io fino ad arrivare a 0
    interval = setInterval(() => {
    //qui la variabile tempo diminuisce fino ad arrivare a 0 e andrà a diventare la variabile result ovvero il timer che noi vediamo scorrere a schermo
        tempo--;
        result.innerHTML = tempo;
        //questo if serve a pulire il countdown una volta arrivati a 0, e mostrerà un alert alla fine
        if(tempo <= 0){
            clearInterval(interval);
            interval = 0;
            alert(`Tempo Scaduto!!`);
        }
        
        
        
    },1000);
}
    //creo la funzione di reset , semplicemente uso clearInterval, la variabile interval la riporto a 0 e cosi l'input dato da me e il risultato e il tempo
    function azzera() {
        clearInterval(interval);
        interval = 0;
        tempo = 0;
        start.value = 0;
        result.innerHTML = 0;
        alert(`Hai resettato il Timer!!`);
        
    }
    
    //creo la funzione di pausa del timer, se interval sarà > 0 allora fermerò il timer con clearInterval l'intervallo lo riporterò a 0 cosi poi il timer potrà ripartire con il pulsante start da dove l'ho fermato , senza avere l'errore di far avviare il timer dalla variabile iniziale di start, poichè non vado a toccare la variabile tempo, così che li rimanga salvato il tempo rimanente del timer
    function pausa() {
        if (interval > 0) {
            
            clearInterval(interval);
            interval = 0;
            alert(`Hai messo il Timer in pausa!`);
            
        }
    }
    
    btnStart.addEventListener('click', () => conta());
    
    btnStop.addEventListener('click', () => azzera());
    
    btnPausa.addEventListener('click', () => pausa());
    
    