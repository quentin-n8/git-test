class Personne {
	
	constructor(nom,age){
		this.nom= nom;
		this.age= age;
	}

	vieillir() {
		this.age++;
	}

	categorie() {
		if(this.age < 11) {
			return 'enfant';
		}
		else if(this.age >=11 && this.age <=17) {
			return 'adolescent';
		}
		else if(this.age >=18 && this.age <=29) {
			return 'jeune';
		}
		else if(this.age >=30 && this.age <=49) {
			return 'fleur de l\'âge';
		}
		else {
			return 'senior';
		}
	}

	anneesAvantRetraite() {
		if(this.age < 70) {
			return 70-this.age;
		}
		else {
			return 0;
		}
	}

	presentation() {
		return `Bonjour, je suis ${this.nom} et j’ai ${this.age} ans, plus que ${this.anneesAvantRetraite()} ans et je serai enfin peinard.`;
	}
}

class Eleve extends Personne {

	constructor(nom,age,etablissement){
		super(nom,age);
		this.etablissement= etablissement;
		this.notes= [];
	}

	recevoirNote(note) {
		this.notes.push(note);
	}

	moyenne() {
		let somme= 0;
		this.notes.forEach((note) => {
			somme= somme + note;
		});
		return somme/(this.notes.length);
	}

	presentation() {
		let str= super.presentation();
		return str+`J'étudie à ${this.etablissement}.`;
	}
}

function comparer(personneA,personneB) {
	return JSON.stringify(personneA) === JSON.stringify(personneB);
}

let senior1= new Personne('Jean',62);
let senior2= new Personne('Patrick',74);

console.log(senior1.presentation());
console.log(senior2.presentation());

let eleve1= new Eleve('François',17,'Lycée international')

eleve1.recevoirNote(9);
eleve1.recevoirNote(11);
eleve1.recevoirNote(15);
eleve1.recevoirNote(7);
eleve1.recevoirNote(16);

console.log(typeof eleve1.notes[0]);

console.log(eleve1.presentation());
console.log(eleve1.moyenne());

while(eleve1.anneesAvantRetraite() !== 0) {
	eleve1.vieillir();
}

console.log(eleve1.presentation());

let toto1= new Personne('Toto',44);
let toto2= new Personne('Toto',44);

console.log(comparer(toto1,toto2));