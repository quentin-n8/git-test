let var1= 10;

function function1() {
	console.log(var1);
}

function1();

function A() {
	let var2= 3;
	function B() {
		let var2= 2;
		console.log(var2);
	}
	B();
	console.log(var2);
}

A();

function function2() {
	let var3= 10;
}

function2();
console.log(var3);