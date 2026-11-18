const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

await delay(2000).then(() => console.log('Done!'));
// Dopo 2 secondi:
// Done!
