let n1=Number(process.argv[2]);
let segno=process.argv[3];
let n2=Number(process.argv[4]);

switch (segno){
	case "add":
	som=n1+n2;
	console.log("Somma: "+ som);
	break;
	case "sub":
        sot=n1-n2;
        console.log("Sottrazione: "+ sot);
	break;
	case "div":
        div=n1/n2;
        console.log("Divisione: "+ div);
	break;
	case "mul":
	mol=n1*n2;
	console.log("Moltiplicazione: "+ mol);
	break;
	case "exp":
	pot=n1^n2;
	console.log("Potenza: "+ pot);
	break;
	default:
	console.log("Errore: operatore non riconosciuto");
	break;
}
