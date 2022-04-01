// alert('Hello World!');

// Consegna

// 1. Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 2. Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/////////////////////////////////////////////////
// 1. Palidroma

// Flowchart
// A[INIZIO] --> B[Chiedere all’utente di inserire una parola]
// B -->|human| C[Prendere la parola inserita]
// C --> D0[Applicare la funzione giraParola alla parola inserita ]
//       D0 --> D1 [Creo la funzione giraParola con argomento la variabile parola inserita dall'utente]
//       D1 --> D2 [nella variabile lettere splitto la parola]
//       D3 --> D4 [creo un ciclo for dove metto un contatore che i conti i cicli a sottrarre le lettere da lettere]
//       D4 --> D5 [quindi aggiungo a parolaGirata i cicli di lettere]
//       D6 --> D7 [al termine del ciclo la funzione deve restituirmi il contenuto di parolaGirata]
// D7 --> E{La parola inserita è uguale al risultato di giraParola?}
// E -->|si| F[La parola inserita è palindroma]
// E -->|no| G[La parola inserita non è palindroma]
// F & G --> Z[FINE]