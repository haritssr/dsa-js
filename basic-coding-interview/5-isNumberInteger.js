//A very simple way to check if a numbe is a decimal or integers is to see if there is a remainder left when you divide by 1

function isInt(n){
   return n % 1 === 0
}

console.log(isInt(-1));
console.log(isInt(2));
