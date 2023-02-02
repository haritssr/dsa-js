//enqueue = add an element
//dequeue = remove an element

let inputStack = [];
let outputStack = [];

function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  if (stackOutput.length <= 0) {
    while (stackInput.length > 0) {
      stackOutput.push(stackInput.pop());
    }
  }
  return stackOutput.pop();
}

enqueue(inputStack, 1);
enqueue(inputStack, 2);
enqueue(inputStack, 3);
console.log('inputStack:', inputStack);
console.log('outputStack:', outputStack);

const a = dequeue(inputStack, outputStack);
console.log(a);


console.log('inputStack:', inputStack);
console.log('outputStack:', outputStack);
