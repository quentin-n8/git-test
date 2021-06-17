class Vehicule {
	
	constructor(nom,vitesseMax){
		this.nom= nom;
		this.vitesseMax= vitesseMax;
	}

	seDeplacer() {
		console.log('se déplace');
	}
}

class Voiture extends Vehicule {
	
	constructor(nom,vitesseMax,immatriculation){
		super(nom,vitesseMax);
		this.immatriculation= immatriculation;
	}

	seDeplacer() {
		console.log('roule');
	}

	affichage() {
		return(`Mon immatriculation est ${this.immatriculation}`);
	}
}

let vehicule1= new Vehicule('Fusée','Mach3');
vehicule1.seDeplacer();

let voiture1= new Voiture('Peugeot 307','150km/h','644-ECB-Z77');

voiture1.seDeplacer();
console.log(voiture1.affichage());

voiture1.immatriculation= '000-000-000';
console.log(voiture1.immatriculation);
