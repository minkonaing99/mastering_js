//yyyy,mm,dd,hh,mm,ss

const date = new Date();

const yyyy = date.getFullYear();
const mm = date.getMonth();
const dd = date.getDay();

// console.log(`Year: ${yyyy}`);
// console.log(`Month: ${mm}`);
// console.log(`day: ${dd}`);

console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
date.setDate(date.getDate() - 1);
console.log(date.toLocaleString());
