<span class="bigTitle">Processing per Gatti</span>
## Un'introduzione gentile alla programmazione, fatta di immagini, colore e movimento <span class="right">![zampa](images/paw-palette.svg)</span>
### *Per gatti che non hanno mai scritto una riga di codice, ma hanno opinioni molto ferme sul colore*

"Processing" è il nome di un'intera famiglia di strumenti costruiti per un unico scopo: permettere ad artisti, designer e altre creature dall'occhio visivo di scrivere codice che *disegna cose*, invece di codice che gestisce fogli di calcolo. Questo tutorial usa **p5.js**, il membro JavaScript di quella famiglia, che ha un vantaggio enorme per una pagina come questa: gira direttamente nel tuo browser, proprio qui, senza installare niente. Ogni riquadro grigio con un bordo qui sotto è un programma vero, reale, in esecuzione &mdash; non uno screenshot.

Se non hai mai scritto una riga di codice in vita tua, sei nel posto giusto. Questa pagina non presume nulla, a parte che sai usare un mouse e che apprezzi un buon gioco di parole visivo.

*Stai leggendo su GitHub?* I blocchi di codice sono quelli veri, ma i riquadri che dovrebbero mostrarli in azione qui restano vuoti &mdash; il visualizzatore di README di GitHub (giustamente) non esegue un tag `<script>` per te. Vedili funzionare davvero su **[lucanenni.github.io/processing-for-cats-it](https://lucanenni.github.io/processing-for-cats-it/)**.

Processing per Gatti è rilasciato con licenza [CC0](https://creativecommons.org/publicdomain/zero/1.0/) &mdash; fanne quello che vuoi.

*Questo è un tutorial non ufficiale e originale, scritto nello stile di [JavaScript for Cats](https://github.com/max-mapper/javascript-for-cats) di [@maxogden](http://twitter.com/maxogden), e un compagno di [HTML per Gatti](https://github.com/lucanenni/html-for-cats-it) e [CSS per Gatti](https://github.com/lucanenni/css-for-cats-it). Non è una traduzione, non è ufficiale &mdash; solo altro tributo, con più pastelli.*

## Indice

- [Non essere un gatto spaventato](#scaredy-cat)
- [Cos'è, esattamente, il "codice"?](#what-is-code)
- [Conosci il tuo canvas](#canvas)
- [Forme](#shapes)
- [Colore](#color)
- [Variabili](#variables)
- [setup() e draw()](#setup-draw)
- [Far muovere le cose](#motion)
- [Condizioni: rimbalzare contro i muri](#conditionals)
- [Interazione con il mouse](#interaction)
- [Cicli](#loops)
- [Casualità](#randomness)
- [Funzioni](#functions)
- [Array, ovvero: un intero stormo di cose](#arrays)
- [Letture consigliate](#recommended-reading)

## <a id="scaredy-cat" href="#scaredy-cat">#</a> Non essere un gatto spaventato

Stessa storia di ogni altra pagina di questa serie: qui non puoi rompere niente, né permanentemente né altrimenti. Il peggio che può succedere sbagliando qualcosa è che un cerchio finisca del colore sbagliato, o che una forma voli via nel vuoto e non torni più. Aggiorna la pagina e sparisce, come se non fosse mai successo.

Questo conta ancora di più del solito su una pagina di *grafica*, perché il codice grafico fallisce in modi estremamente visibili, spesso estremamente buffi. Un segno meno messo nel posto sbagliato non manda in crash il computer &mdash; fa solo volare il tuo cerchio verso l'alto nello spazio profondo invece di farlo rimbalzare gentilmente, e capisci subito che qualcosa non va perché puoi *vederlo*. Questo feedback immediato è esattamente il motivo per cui Processing esiste, ed esattamente il motivo per cui è un modo così amichevole di imparare a programmare. I programmatori che lavorano su cose invisibili (database, server, l'equivalente informatico dell'idraulica) non hanno questo lusso. Tu sì. Goditelo.

## <a id="what-is-code" href="#what-is-code">#</a> Cos'è, esattamente, il "codice"?

Il codice è solo una lista di istruzioni, scritte in un linguaggio che un computer può seguire esattamente, passo dopo passo, dall'inizio alla fine. Questo è tutto il segreto. Una ricetta è codice per un cuoco umano. Uno schema a maglia è codice per un paio di mani. Questa pagina ti insegnerà un linguaggio chiamato JavaScript, e nello specifico un suo *dialetto* chiamato p5.js, costruito interamente attorno al disegnare.

Il computer non sa cosa *intendevi* fare. Fa esattamente quello che hai *scritto*, il che è o la cosa più esasperante o la più deliziosa della programmazione, a seconda della giornata. Scrivi `ellipse(50, 50, 30, 30)` e ottieni un cerchio nella posizione (50, 50), largo 30 pixel. Scrivi `ellipse(50, 50, 300, 30)` &mdash; una sola cifra diversa &mdash; e ottieni invece un ovale lungo e schiacciato. Il computer non sta facendo il difficile. Sta solo essendo preciso, l'unica cosa in cui i computer sono estremamente bravi e i gatti, per contratto, no.

## <a id="canvas" href="#canvas">#</a> Conosci il tuo canvas

Ogni sketch p5.js inizia creando un **canvas** &mdash; un'area rettangolare su cui disegnare, misurata in pixel. Se ne crea uno con `createCanvas(larghezza, altezza)`:

```js
createCanvas(300, 200);
```

Questo ti dà una superficie di disegno larga 300 pixel e alta 200. Ecco la parte che frega letteralmente tutti all'inizio: **il sistema di coordinate è capovolto rispetto a quello che hai imparato a matematica.** La posizione (0, 0) è l'angolo *in alto a sinistra*, non in basso a sinistra. La X aumenta ancora verso destra, come sempre, ma la Y aumenta *verso il basso*, verso il fondo del canvas. Pensalo meno come un grafico e più come leggere una pagina: parti dall'angolo in alto a sinistra e conti verso il basso e verso destra da lì.

```
(0,0) ────────────────► la x aumenta
  │
  │     canvas
  │
  ▼
la y aumenta
```

Ogni posizione e ogni forma da qui in poi viene descritta usando questa coppia (x, y). Prendici confidenza subito &mdash; ti risparmierà un bel po' di momenti "perché il mio cerchio è finito in basso quando gli avevo detto di andare in alto" più avanti.

## <a id="shapes" href="#shapes">#</a> Forme

p5.js include di serie un piccolo insieme di forme base, ognuna una funzione che chiami passandole i numeri che la descrivono. Un'ellisse vuole una x, una y, una larghezza e un'altezza:

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(240);
  ellipse(150, 100, 80, 80);
  rect(20, 20, 60, 40);
  line(200, 20, 260, 60);
}
```

<div class="p5-demo" id="demo-shapes"></div>
<p class="p5-demo-caption">Dal vivo: un'ellisse, un rettangolo e una linea, disegnati da questo identico codice.</p>

`ellipse(x, y, larghezza, altezza)` disegna un'ellisse *centrata* in (x, y). `rect(x, y, larghezza, altezza)` disegna un rettangolo a partire dal suo *angolo* in alto a sinistra, in (x, y) &mdash; nota la differenza, è una fonte costante di confusione. `line(x1, y1, x2, y2)` collega due punti. Ci sono anche `triangle()`, `point()` e qualche altra, tutte con lo stesso schema: un nome di funzione, seguito dai numeri che fissano esattamente dove e quanto grande vuoi quella forma.

`background(240)` non è una forma, ma si comporta come tale: colora *tutto* il canvas con un grigio uniforme, il che è importante, perché senza quella riga ogni forma di ogni fotogramma precedente resterebbe lì per sempre. Tra un attimo vedrai perché conta.

## <a id="color" href="#color">#</a> Colore

Di default tutto viene disegnato in nero su sfondo bianco, il che è un look, ma di solito non è quello che stai cercando. Due funzioni lo controllano: `fill()` imposta il colore usato per riempire l'*interno* delle forme, e `stroke()` imposta il colore del loro contorno. Entrambe accettano o un solo numero (una tonalità di grigio, 0 per il nero, 255 per il bianco) o tre numeri (rosso, verde, blu, ciascuno da 0 a 255):

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(20, 20, 40);
  noStroke();
  fill(255, 165, 0);
  ellipse(90, 100, 100, 100);
  fill(0, 200, 180);
  ellipse(210, 100, 100, 100);
}
```

<div class="p5-demo" id="demo-color"></div>
<p class="p5-demo-caption">Dal vivo: due ellissi, una arancione e una verde acqua, su sfondo blu scuro.</p>

`noStroke()` disattiva del tutto il contorno, il che di solito è quello che vuoi per forme piatte e dall'aspetto moderno &mdash; senza, ogni cosa riceve un bordo nero di default. C'è anche un quarto numero, opzionale, che puoi aggiungere a qualsiasi colore: la trasparenza, da 0 (invisibile) a 255 (pieno). `fill(255, 165, 0, 100)` è lo stesso arancione di sopra, ma trasparente. Userai questo trucco più avanti.

## <a id="variables" href="#variables">#</a> Variabili

Una **variabile** è una scatola etichettata che contiene un valore, così puoi riferirti ad essa per nome invece di riscrivere lo stesso numero continuamente &mdash; e, cosa più importante, così puoi *cambiare* cosa c'è dentro la scatola più avanti. Se ne crea una con `let`, seguito da un nome a tua scelta, un `=`, e il valore da memorizzare:

```js
let dimensioneCerchio = 80;
let coloreCerchio = 200;

ellipse(150, 100, dimensioneCerchio, dimensioneCerchio);
fill(coloreCerchio);
```

Il nome lo scegli tu (evita spazi e di iniziare con un numero, ma per il resto sbizzarrisciti). Il punto di una variabile non è davvero risparmiare battitura &mdash; è che una volta che qualcosa ha un nome, puoi cambiare l'*unico* posto in cui è definita e vedere quel cambiamento propagarsi ovunque venga usata. Questo diventa essenziale nel momento in cui vuoi che qualcosa si muova, che è, comodamente, la prossima sezione.

## <a id="setup-draw" href="#setup-draw">#</a> setup() e draw()

Avrai notato che ogni esempio finora era incapsulato in due funzioni chiamate `setup()` e `draw()`. Questo è il battito cardiaco di ogni sketch p5.js, e vale la pena capire esattamente cosa fa:

- **`setup()` viene eseguita esattamente una volta**, appena lo sketch parte. È lì che crei il tuo canvas e imposti tutto ciò che deve succedere una sola volta.
- **`draw()` viene eseguita continuamente**, di default circa 60 volte *al secondo*, finché lo sketch resta attivo. Ognuna di quelle 60 chiamate al secondo ridisegna l'intero canvas da zero.

Questo secondo punto è la chiave dell'animazione, ed è il motivo per cui `background()` compare in cima a quasi ogni `draw()` che scriverai mai: senza, ogni fotogramma accumulerebbe nuove forme sopra quelle del fotogramma precedente, 60 volte al secondo, trasformandosi in una macchia illeggibile quasi all'istante. Pulisci il canvas, poi ridisegna tutto nella sua nuova posizione &mdash; 60 volte al secondo, più veloce di quanto il tuo occhio riesca a percepire i singoli fotogrammi, esattamente lo stesso trucco che usa un flipbook (o la coda di un gatto, a metà di uno scatto) per simulare un movimento fluido a partire da una serie di immagini ferme.

```js
let x = 0;

function setup() {
  createCanvas(300, 150);
}

function draw() {
  background(240);
  x = (x + 2) % width;
  ellipse(x, 75, 40, 40);
}
```

<div class="p5-demo" id="demo-animate"></div>
<p class="p5-demo-caption">Dal vivo: un cerchio che deriva verso destra, all'infinito.</p>

Quella riga `x = (x + 2) % width` fa due cose. `x = x + 2` significa "prendi quello che c'è attualmente in `x`, aggiungici 2, e rimettilo dentro `x`" &mdash; a ogni fotogramma, la posizione del cerchio avanza di 2 pixel verso destra. La parte `% width` (chiamata *modulo*) è una scorciatoia per "torna a 0 non appena supereresti `width`" &mdash; senza, il cerchio uscirebbe semplicemente dallo schermo una volta sola e non tornerebbe mai più, il che è comunque uno sketch perfettamente valido, solo un po' meno soddisfacente.

## <a id="motion" href="#motion">#</a> Far muovere le cose

Ora che sai che `draw()` gira 60 volte al secondo e che le variabili possono cambiare da un fotogramma all'altro, il "movimento" è solo: una variabile che cambia di un pochino, a ogni singolo fotogramma. È tutto il trucco, per quanto complicata possa diventare l'animazione alla fine. Una palla che cade è una variabile `y` che aumenta un po' a ogni fotogramma. Un cerchio che pulsa è una variabile `dimensione` che sale e scende. Una forma che ruota è una variabile angolo che continua a salire. Sempre la stessa idea: cambia un numero di poco, ridisegna, ripeti 60 volte al secondo.

## <a id="conditionals" href="#conditionals">#</a> Condizioni: rimbalzare contro i muri

L'animazione qui sopra si "avvolge" attorno al bordo, ma un movimento dall'aspetto più naturale è *rimbalzare* &mdash; e rimbalzare richiede che il tuo sketch prenda una decisione. Ecco a cosa serve un'istruzione `if`: esegue un blocco di codice solo quando una certa condizione è vera, e lo salta altrimenti.

```js
let x = 150;
let velocita = 3;

function setup() {
  createCanvas(300, 150);
}

function draw() {
  background(240);
  x = x + velocita;

  if (x > width || x < 0) {
    velocita = velocita * -1;
  }

  ellipse(x, 75, 40, 40);
}
```

<div class="p5-demo" id="demo-bounce"></div>
<p class="p5-demo-caption">Dal vivo: un cerchio che rimbalza tra il bordo sinistro e quello destro.</p>

Leggi ad alta voce quella riga con l'`if`: "se `x` è maggiore della larghezza, *oppure* `x` è minore di 0, allora...". Il simbolo `||` significa "oppure". Nell'istante in cui la pallina raggiunge uno dei due bordi, `velocita = velocita * -1` ne ribalta il segno &mdash; una velocità positiva (movimento verso destra) diventa negativa (movimento verso sinistra), e viceversa &mdash; e siccome `x` continua a cambiare di `velocita` ogni fotogramma, la pallina inizia ad andare dall'altra parte. Esiste anche `&&`, che significa "e", per quando *entrambe* le cose devono essere vere insieme. I gatti, notoriamente, non rispondono a nessuno dei due operatori e faranno quello che vogliono a prescindere dalle condizioni.

## <a id="interaction" href="#interaction">#</a> Interazione con il mouse

p5.js tiene aggiornate automaticamente, gratis, in ogni momento, due variabili: `mouseX` e `mouseY`, la posizione attuale del cursore del mouse sopra il canvas. Non le imposti tu &mdash; le leggi e basta:

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(240);
  fill(255, 100, 150);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
```

<div class="p5-demo" id="demo-mouse"></div>
<p class="p5-demo-caption">Dal vivo: muovi il mouse sopra il riquadro.</p>

Per reagire ai click invece che alla posizione, esiste una funzione speciale chiamata `mousePressed()` che p5.js esegue automaticamente, una volta, ogni volta che clicchi &mdash; non la chiami mai tu stesso, definisci solo cosa deve succedere al suo interno:

```js
let arancione = true;

function setup() {
  createCanvas(300, 200);
}

function mousePressed() {
  arancione = !arancione;
}

function draw() {
  background(240);
  if (arancione) {
    fill(255, 165, 0);
  } else {
    fill(0, 200, 180);
  }
  ellipse(150, 100, 100, 100);
}
```

<div class="p5-demo" id="demo-click"></div>
<p class="p5-demo-caption">Dal vivo: clicca nel riquadro per alternare il colore.</p>

`arancione` è un **booleano** &mdash; una variabile che è sempre e solo `true` (vero) o `false` (falso), niente altro. Il simbolo `!` significa "non", quindi `arancione = !arancione` si legge come "arancione diventa non-arancione", un modo compatto per dire "ribaltalo". `setup()`, `draw()` e `mousePressed()` sono tutte funzioni che p5.js sa di dover cercare e chiamare automaticamente al momento giusto &mdash; ce ne sono altre (`mouseReleased()`, `keyPressed()`, e altre ancora) che seguono tutte lo stesso schema.

## <a id="loops" href="#loops">#</a> Cicli

Disegnare una forma è facile. Disegnarne quaranta copiando e incollando `ellipse(...)` quaranta volte, con quaranta numeri leggermente diversi, è un tipo speciale di tedio che i programmatori rifiutano per principio. Un ciclo `for` ripete un blocco di codice un numero prefissato di volte, cambiando un contatore a ogni giro:

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(240);
  noStroke();
  fill(120, 170, 220);

  for (let x = 20; x < width; x = x + 40) {
    for (let y = 20; y < height; y = y + 40) {
      ellipse(x, y, 25, 25);
    }
  }
}
```

<div class="p5-demo" id="demo-grid"></div>
<p class="p5-demo-caption">Dal vivo: un'intera griglia di puntini, da otto righe di codice.</p>

Quella riga `for (let x = 20; x < width; x = x + 40)` racchiude tre istruzioni in una sola: *parti* con `x` a 20, *continua* finché `x` è minore della larghezza del canvas, e *dopo ogni giro*, aggiungi 40 a `x`. Metti un secondo ciclo dentro il primo (un ciclo "annidato") e ottieni ogni combinazione di x e y &mdash; una griglia, da otto righe invece che da quaranta separate. Questo è il vero punto dei cicli: non solo meno battitura, ma uno schema che continua a funzionare anche se ridimensioni il canvas, cambi la spaziatura, o vuoi 4 puntini invece di 40 &mdash; dovresti cambiare un solo numero.

## <a id="randomness" href="#randomness">#</a> Casualità

`random()` restituisce un numero decimale casuale, ed è una delle funzioni più usate in tutto il coding creativo, perché la vera casualità è ciò che distingue il "generato al computer" dal "disegnato a mano e sospettosamente preciso". Chiamata senza argomenti restituisce qualcosa tra 0 e 1; chiamata con un numero, qualcosa tra 0 e quel numero; chiamata con due numeri, qualcosa tra i due.

```js
function setup() {
  createCanvas(300, 200);
  background(240);
}

function draw() {
  noStroke();
  fill(255, 165, 0, 150);
  let x = random(width);
  let y = random(height);
  let dimensione = random(5, 30);
  ellipse(x, y, dimensione, dimensione);
}
```

<div class="p5-demo" id="demo-random"></div>
<p class="p5-demo-caption">Dal vivo: puntini casuali e trasparenti, uno nuovo ogni fotogramma, all'infinito.</p>

Nota che `background(240)` questa volta si è spostato dentro `setup()`, e *non* è più dentro `draw()`. Questo significa che il canvas viene pulito una sola volta, all'inizio &mdash; ogni puntino disegnato dopo resta lì, accumulandosi fotogramma dopo fotogramma in una chiazza di colore che si infittisce lentamente. È lo stesso motore draw()-gira-60-volte-al-secondo di ogni altro sketch di questa pagina; l'unica cosa cambiata è *cosa* viene ridisegnato e cosa viene lasciato stare. Quella singola decisione &mdash; pulire ogni fotogramma, oppure no &mdash; è una delle scelte creative più potenti a tua disposizione in Processing, e non costa nulla provare entrambe le strade e vedere quale ti piace di più.

## <a id="functions" href="#functions">#</a> Funzioni

Hai *usato* funzioni per tutto questo tempo (`ellipse()`, `random()`, `fill()`), ma puoi anche *scriverne di tue* &mdash; il che conta nel momento in cui vuoi disegnare la stessa cosa complessa più di una volta, in posizioni o dimensioni diverse, senza riscrivere ogni volta tutte le forme che la compongono.

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(240);
  disegnaGatto(80, 110, 60);
  disegnaGatto(210, 90, 40);
}

function disegnaGatto(x, y, dimensione) {
  noStroke();
  fill(90);
  triangle(x - dimensione * 0.5, y - dimensione * 0.3, x - dimensione * 0.15, y - dimensione * 0.9, x, y - dimensione * 0.3);
  triangle(x + dimensione * 0.5, y - dimensione * 0.3, x + dimensione * 0.15, y - dimensione * 0.9, x, y - dimensione * 0.3);
  fill(130);
  ellipse(x, y, dimensione, dimensione);
  fill(255);
  ellipse(x - dimensione * 0.2, y - dimensione * 0.05, dimensione * 0.15, dimensione * 0.15);
  ellipse(x + dimensione * 0.2, y - dimensione * 0.05, dimensione * 0.15, dimensione * 0.15);
  fill(20);
  ellipse(x - dimensione * 0.2, y - dimensione * 0.05, dimensione * 0.06, dimensione * 0.06);
  ellipse(x + dimensione * 0.2, y - dimensione * 0.05, dimensione * 0.06, dimensione * 0.06);
}
```

<div class="p5-demo" id="demo-function"></div>
<p class="p5-demo-caption">Dal vivo: una funzione scritta a mano, chiamata due volte, a due dimensioni diverse.</p>

`disegnaGatto(x, y, dimensione)` racchiude sette forme separate &mdash; due orecchie, una testa, due occhi, due pupille &mdash; in un'unica unità riutilizzabile. `x`, `y` e `dimensione` tra le parentesi sono **parametri**: nomi segnaposto che vengono riempiti con qualsiasi valore tu passi quando *chiami* la funzione. `disegnaGatto(80, 110, 60)` e `disegnaGatto(210, 90, 40)` eseguono esattamente le stesse sette righe di codice di disegno due volte, ma ogni posizione e ogni misura al loro interno si adatta automaticamente in base a quei tre numeri, perché ogni singola forma è scritta *in relazione a* `x`, `y` e `dimensione` invece che come numeri fissi. Cambia la funzione una volta sola, e ogni gatto disegnato ovunque venga chiamata riceve la correzione gratis.

## <a id="arrays" href="#arrays">#</a> Array, ovvero: un intero stormo di cose

Un gruppo di gatti si chiama, in inglese, "clowder", e se vuoi un intero gruppo di *qualsiasi cosa* &mdash; non solo due, quante ne vuoi tu &mdash; ti serve un **array**: una singola variabile che contiene un'intera lista di valori invece di uno solo. Combinati con tutto il resto di questa pagina (cicli, funzioni, casualità), gli array sono il modo in cui si passa da "una forma" a "un'intera scena piena di forme", ognuna indipendente dalle altre.

```js
let puntini = [];

function setup() {
  createCanvas(300, 200);
  for (let i = 0; i < 12; i++) {
    puntini.push({
      x: random(width),
      y: random(height),
      velocita: random(1, 3)
    });
  }
}

function draw() {
  background(240);
  for (let i = 0; i < puntini.length; i++) {
    let p = puntini[i];
    p.x = p.x + p.velocita;
    if (p.x > width) {
      p.x = 0;
    }
    noStroke();
    fill(120, 170, 220);
    ellipse(p.x, p.y, 14, 14);
  }
}
```

<div class="p5-demo" id="demo-array"></div>
<p class="p5-demo-caption">Dal vivo: dodici puntini indipendenti, ognuno con la propria velocità e posizione.</p>

`let puntini = []` crea un array vuoto. `puntini.push({...})` aggiunge un elemento in fondo &mdash; qui, ogni elemento è un suo piccolo pacchetto di valori `x`, `y` e `velocita`, uno per puntino, tutti diversi, impostati casualmente in quel primo ciclo `for` dentro `setup()`. Poi `draw()` scorre *l'intero array*, a ogni singolo fotogramma, aggiornando e ridisegnando ogni puntino in base alla sua velocità personale &mdash; alcuni scivolano pigramente, altri sfrecciano, e ognuno fa la sua cosa in modo indipendente, con una ventina di righe di codice in tutto. Questo è lo schema dietro quasi ogni sistema di particelle, stormo, sciame o folla che vedrai mai nell'arte generativa: un array, un ciclo, una funzione che descrive cosa fa un *singolo* elemento, applicata automaticamente a quanti elementi decidi di mettere nella lista.

## La fine!

Questo è l'intero kit di attrezzi: forme, colore, variabili, il battito cardiaco `setup()`/`draw()`, movimento, condizioni, input del mouse, cicli, casualità, funzioni e array. Ogni pezzo di arte generativa, ogni sketch interattivo e giocoso, ogni pattern degno di fare da salvaschermo che tu abbia mai visto è costruito con qualche combinazione esattamente di questi ingredienti &mdash; niente di più esotico di quello che è già su questa pagina. L'unica cosa che resta da fare è combinarli a modo tuo.

Hai un altro argomento che vorresti veder trattato? Apri una issue [su GitHub](https://github.com/lucanenni/processing-for-cats-it/issues).

### <a id="recommended-reading" href="#recommended-reading">#</a> Letture consigliate

Processing per Gatti salta molti dettagli che non contano per iniziare (i gatti hanno un problema di concentrazione ben documentato), ma se vuoi approfondire:

- [Il riferimento di p5.js](https://p5js.org/reference/) (in inglese) è l'elenco completo e ufficiale di ogni funzione citata qui, e di centinaia d'altre.
- [L'editor web di p5.js](https://editor.p5js.org/) ti permette di scrivere ed eseguire sketch all'istante, direttamente nel browser, senza installare nulla &mdash; il passo naturale dopo questa pagina.
- [The Coding Train](https://thecodingtrain.com/) di Daniel Shiffman (in inglese) ha centinaia di video tutorial amichevoli e approfonditi proprio su questo materiale, e molto oltre.
- [OpenProcessing](https://openprocessing.org/) è una grande galleria pubblica di sketch, tutti con codice sorgente visibile e remixabile.
- [Processing.org](https://processing.org/) è il fratello maggiore originale di p5.js, basato su Java, per quando vorrai uscire dal browser e passare a un ambiente desktop completo.
- [JavaScript for Cats](https://github.com/max-mapper/javascript-for-cats) di [@maxogden](http://twitter.com/maxogden) (o la sua [traduzione italiana](https://github.com/lucanenni/javascript-for-cats-it)), per il JavaScript generico su cui p5.js stesso è costruito.
- [CSS per Gatti](https://github.com/lucanenni/css-for-cats-it) e [HTML per Gatti](https://github.com/lucanenni/html-for-cats-it), se vuoi dare ai tuoi sketch una casa vera su una pagina web.

<hr>

*Processing per Gatti è un progetto indipendente di fan, scritto per l'universo di [JavaScript for Cats](https://github.com/max-mapper/javascript-for-cats) di [@maxogden](http://twitter.com/maxogden), con affetto e senza alcuna affiliazione ufficiale. Non è affiliato nemmeno alla Processing Foundation o al progetto p5.js &mdash; solo un grande fan di entrambi. Contributi e correzioni sono benvenuti su [GitHub](https://github.com/lucanenni/processing-for-cats-it).*
