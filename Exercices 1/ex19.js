let tab1= [9,1,3,6,2];

console.log(tab1.length);
console.log(tab1.pop());

tab1.push(4);

for(i = 0; i<tab1.length; i++) {
	tab1[i]= tab1[i]+2;
}

tab1[3]= tab1[3]+1;

console.log(tab1);

let somme=10;

tab1.forEach(nb => somme= somme + nb);

console.log(somme);

tab1.sort();

console.log(tab1);