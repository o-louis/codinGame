let input = process.argv[2];
if (isNaN(input)) { console.error("Arg is not a number"); return;}

const factorial = nb => nb === 0 ? 1 : nb * factorial(nb-1);
console.log(factorial(input));
