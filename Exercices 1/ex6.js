console.log("5" == 5);
console.log("5" === 5);
console.log("5" != 5);
console.log("5" !== 5);

let obj1={
	forme:'carre',
}

let obj2= obj1;

let obj3= {
	geometry: obj1,
	size: 1,
}

console.log(obj1 === obj2);
console.log(obj1 === obj3);

console.log(obj3);