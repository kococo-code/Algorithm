function recursiveFibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
function memoizedFibonacci(n: number) {
  const memo: number[] = [];
  function fib(n: number): number {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib(n);
}

console.log(recursiveFibonacci(9));
console.log(memoizedFibonacci(9));
