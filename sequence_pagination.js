const total = process.argv[2];
const width = process.argv[3];
const center = process.argv[4];

if (isNaN(total) || isNaN(width) || isNaN(center)) {
  console.error("Arg is not a number"); 
  return;
}

let sequence = "";
const sideLength = Math.floor(center / 2);
let startNumber = center - sideLength;

for (let i = 0; i < width; i++) sequence += startNumber++ + (i+1===width ? "" : " ");

console.log(sequence);
