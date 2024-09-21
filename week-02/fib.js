//以下為遞迴實作Fibonacci 函數
function fib(n){
    if (n<=1)
        return n;   //case:fib(0)=0, fib(1)=1

    return fib(n-1)+fib(n-2); //下個數字總會是前兩個數字的和
}

console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(5));  // 5
console.log(fib(10)); // 55