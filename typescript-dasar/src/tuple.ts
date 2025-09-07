//membuat tuple dasar
let person: [string, string];
person = ["jhon", "jotaro"];
console.log(person);

//tuple dengan banyak element
let data: [number, string, boolean];
data = [12, "joko", true];
console.log(data);

//tuple dengan optional
let tim: [string, string?];
tim = ["kimi", "argus"];
console.log("tim satu adalah", tim);
tim = ["alucard"];
console.log("tim dua adalah", tim);

//tuple dengann rest
let restTuple: [string, ...number[], boolean];
restTuple = ["adi", 12, 31, 12, 13, true];
console.log(restTuple);
console.log(restTuple[1]);

//tuple dengan label
let orang: [nama: string, umur: number];
orang = ["yashuo", 23];
console.log(orang);
// console.log(orang[nama]); tidak bisa karna labelnya hanya untuk kebutuhan dokumentasi

//membuat template
type template = [string, number, ...string[], boolean, menikah: boolean];
const manusia1: template = [
  "kurnia",
  20,
  "ngoding",
  "main game",
  "tidur",
  true,
  false,
];

console.log(manusia1);
