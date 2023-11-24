function fibonacciGenerator(n) {
    let arr = [0, 1];
    if (n == 1) {
        return arr[0];
    } else if (n == 2) {
        return arr;
    } else {
        while (arr.length < n) {
            arr.push(arr[arr.length-1] + arr[arr.length-2]);
        }
        return arr;
    }	
}
console.log(fibonacciGenerator(1));