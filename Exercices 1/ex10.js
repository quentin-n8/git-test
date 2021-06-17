function submitValue() {
number = document.getElementById("myInput").value;
number= parseInt(number);
switch (number) {
	case (1):
		number= number+3;
		break;
	case (2):
		number= number*3;
		break;
	default:
		number= number-2;
		break;
	}
console.log(number);
}