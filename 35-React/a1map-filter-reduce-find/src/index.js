var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function e (x) {
  return x * 2;
}

console.log (numbers.map(e))

const vMap = numbers.map((e) => e * 2);
console.log(vMap);

let arr1 = [];
numbers.forEach((e) => {
  arr1.push(e * 2);
});
console.log(arr1);

//Filter - Create a new array by keeping the items that return true.

const filter = numbers.filter((e) => e > 10);
console.log(filter);

let arr2 = []
numbers.forEach((e) => {
  if (e > 10) {
    arr2.push(e);
  }
})
console.log(arr2);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
