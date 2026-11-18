const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
  constructor(nome) {
    super();
    this.nome = nome;
    this.utenti = new Set();
    this.messaggi = [];
  }

  entra(username) {
	constructor(username);

	EventEmitter('utente-entrato');
  }

  esce(username) {
    	const del= utentiSet.delete('bob');
	if(del=true){
		console.log('Utente eliminato');
	} else {
		console.log("Errore: impossibile eliminare l'utente");

	EventEmitter('utente-uscito');
  }

  inviaMessaggio(username, testo) {
    // TODO: Verifica che l'utente sia nella chat


    const messaggio = {
      username,
      testo,
      timestamp: new Date()
    };

    this.messaggi.push(messaggio);

    // TODO: Emetti evento 'nuovo-messaggio'
	EventEmitter('nuovo-messaggio');

    // TODO: Se il messaggio contiene '@tutti', emetti 'menzione-tutti'
	if(messaggio.contains('@tutti'){
	EventEmitter('menzione-tutti');
  }

  getUtentiOnline() {
    return Array.from(this.utenti);
  }
}

// TODO: Implementa i listener

const chat = new ChatRoom('Programmatori');

// Listener per utenti che entrano/escono

// Listener per nuovi messaggi

// Listener per menzioni

// Test
// chat.entra('Mario');
// chat.entra('Luigi');
// chat.inviaMessaggio('Mario', 'Ciao a tutti!');
// chat.inviaMessaggio('Luigi', 'Ciao @tutti!');
