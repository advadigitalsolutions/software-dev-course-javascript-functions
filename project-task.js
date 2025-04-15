function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

let names = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < names.length; i++) {
      greetUser(names[i]);
}

function printList(list) {
   console.log("Names in the list:");
   for (let i = 0; i < list.length; i++) {
      console.log (list[i]);
   }
}

printList(names);

function addNumbers(num1, num2) {
   let sum = num1 + num2;
   return `The sum of ${num1} and ${num2} is ${sum}`;
}

let result = addNumbers(5, 10);
console.log(result);
function multiplyNumbers(num1, num2) {
   let product = num1 * num2;
   return `The product of ${num1} and ${num2} is ${product}`;
}

let productResult = multiplyNumbers(5, 10);
console.log(productResult);