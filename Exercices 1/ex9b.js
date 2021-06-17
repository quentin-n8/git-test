function submitValue() {
number = document.getElementById("myInput").value;
if(number >= 0 && number <=10) {
	console.log('Le nombre saisi est compris entre 0 et 10');
}
else if(number >=11 && number <= 100) {
	console.log('Le nombre saisi est compris entre 11 et 100');
}
else {
	console.log('Le nombre saisi a une autre valeur');
}
}
