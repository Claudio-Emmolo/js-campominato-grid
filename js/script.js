// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




// 1 - Prendo l'elemento pulsante e il div che conterrà i "square" dall'html;

// 2 - Al click del bottone, con addEventList, genero con un ciclo for per 100 "square" e aggiungo la classe "div.square"; ==> Chiamata da una funzione?
    // 2.1 Aggiungo un altro addEventList per cambiare il bg-color della cella al click;

// 3 - Dopo aver generato i "square", con la funzione ".innerText" aggiungo i numeri generati da [i] (+ 1) OPPURE faccio partire il for da (i = 1 ; i <= 100);