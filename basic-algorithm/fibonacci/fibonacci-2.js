/**
 * By threkhleb
 * https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fibonacci/fibonacci.js
 * 
 * Return fibonnaci sequence as an array
 * @param number
 * @return {number[]}
 */


function fibonnaci(number){
   const fibSequence = [1]
   let currentValue = 1;
   let previousValue = 0
   if(number === 1){
      return fibSequence;
   }

   //this statement make sure that the parameter number > 1, if not it (which is 1, remember number must be > 0, since it integer) will return [1]
   let iterationCounter = number - 1;

   while(iterationCounter){
      currentValue = currentValue + previousValue;
      previousValue = currentValue - previousValue;
      
      fibSequence.push(currentValue);

      iterationCounter = iterationCounter - 1
   }

   return fibSequence;
}

console.log(fibonnaci(2))

/*
   if number === 1
   return [1]

   while number = 3 (minimal to do this while)

   #1 iteration @ minimal n === 2
   iterationCounter -= 1 ==> iterationCounter = number - 1 = 3 - 1 = 2 ==> true
   currentValue = currentValue + previousValue = 1 + 0 = 1
   previousValue = currentValue - previousValue = 1 - 0 = 1
   push 1 -> [1,1]

   #2 iteration
   iterationCounter -= 1 ==> iterationCounter = number - 1 - 1 = 3 - 1 - 1 = 1 ==> true
   currentValue = currentValue + previousValue = 1 + 1 = 2
   previousValue = currentValue - previousValue = 2 - 1 = 1
   push 2 -> [1,1,2]

   #3 iteration will not happen because iterationCounter = 0 ==> false
   iterationCounter -= 1 ==> iterationCounter = number - 1 - 1 = 3 - 1 - 1 - 1 = 0 ==> false
   */