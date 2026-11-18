const https= require('https');

https.get('https://api.github.com/users/nodejs', {

        headers: {
		'User-Agent': 'Node.js' //aggiungo l'header User-Agent per la gestione degli errori
		}
}, (res) => {
	let data = '';
	res.on('data', chunk => data += chunk);
	res.on('end', () => {
		try{
			const user=JSON.parse(data);
			console.log(user.name);
		} catch(err){
			console.error("Errore nel parsing JSON:", err.message);
		}
	});
}).on("error", (err)=> { console.error('Errore nella richiesta:', err.message); });
//aggiungo la try e la catch per prevenire eventuali errori
