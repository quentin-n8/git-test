function submitValue() {
number = document.getElementById("myInput").value;
number= parseInt(number);
let test_modulo2 = number%2 == 0 ? 'Pair' : 'Impair';
console.log(test_modulo2);
}