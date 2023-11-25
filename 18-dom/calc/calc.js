
function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

function calc( a, b, operation) {
    return operation(a, b);
}

console.log(calc(5, 2, sum));
console.log(calc (5, 2, sub));
console.log(calc (5, 2, mul));
console.log(calc (5, 2, div));
