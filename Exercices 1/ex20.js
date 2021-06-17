let set1= new Set();

set1.add('Javascript');
set1.add('Java');
set1.add('Node.js');

console.log(set1.size);

set1.add('Javascript');

console.log(set1);

set1= Array.from(set1);

console.log(set1);

let set2= new Set();

set2.add({id:2});
set2.add({id:2});

console.log(set2);