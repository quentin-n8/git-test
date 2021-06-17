let map1= new Map();

map1.set(1, {nom:'Damien', age:29});
map1.set(2, {nom:'Laurent', age:51});

map1.get(1).age= map1.get(1).age+1;

console.log(map1);