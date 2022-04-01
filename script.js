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
// C --> D0[Applicare la funzione palindroma alla parola inserita ]
//       D0 --> D1 [Creo la funzione palindroma con argomento la variabile parola inserita dall'utente]
//       D1 --> D2 [nella variabile lettere splitto la parola]
//       D3 --> D4 [creo un ciclo for dove metto un contatore che i conti i cicli a sottrarre le lettere da lettere]
//       D4 --> D5 [quindi aggiungo a parolaGirata i cicli di lettere]
//       D6 --> D7 [al termine del ciclo la funzione deve restituirmi il contenuto di parolaGirata]
// D7 --> E{La parola inserita è uguale al risultato di palindroma?}
// E -->|si| F[La parola inserita è palindroma]
// E -->|no| G[La parola inserita non è palindroma]
// F & G --> Z[FINE]

const parolaInserita = prompt("Inserisci una parola");

function palindroma(parolaInserita){
  let lettere = parolaInserita.split("");
  console.log(lettere);
  
  let parolaGirata = '';
  
  for (let i = lettere.length - 1; i >= 0; i--){
    parolaGirata += lettere[i];
  } 
  if(parolaInserita === parolaGirata){
    console.log(parolaInserita, " è una parola palindroma.");
    console.log(parolaInserita, " = ", parolaGirata);
  } else {
    console.log("Non è una parola palindroma ", parolaInserita);
    console.log(parolaInserita, " != ", parolaGirata);
  }
  return
}
console.log(palindroma(parolaInserita)); /* DA CONTROLLARE */

/////////////////////////////////////////////////
// 2. Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Flowchart 
// A[INIZIO]
// 1. Chiedi all'utente di scegliere tra pari e dispari
// 2. Salva la scelta dell'utente in una variabile
// 3. Chiedi all'utente di scegliere un numero da 1 a 5
// 4. Salva la scelta dell'utente in una variabile
// 5. Crea una funzione che generi un numero random da 1 a 5
// 6. Applica la funzione *2 volte e salva il risultato in due variabili distinte
// 7. Somma le due variabili risultato
// 8. Determina se la somma è un numero pari o dispari
// 9. Confronta il il punto 2 con il punto 8
//10. Dichiara il vincitore
// Z[FINE]