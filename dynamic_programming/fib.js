
//memorization
const fib = (n, memo = { 1: 1, 2: 1 }) => {
  var assert = require('assert')
  assert(n > 0)
  if (n in memo) return memo[n]

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

  return memo[n]
}

console.log(fib(100))