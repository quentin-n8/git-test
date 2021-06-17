try{
	let a;
	let b= a.nom;
} catch(exception) {
	console.log(exception);
} finally{
	console.log('Phrase affichée dans tous les cas');
}