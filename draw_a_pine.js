const height = process.argv[2];
if (isNaN(height)) { console.error("Arg is not a number"); return;}

// CODE
let three = ""; asterisk = -1; spaces = (height*2);
for (let i = 0; i < height; i++) {
  three += [...Array((spaces-=2)/2).fill(" "), ...Array(asterisk+=2).fill("*"), "\n"].join("");
}
three += [...Array(height-1).fill(" "), "|"].join("");

console.log(three);