//compute number of ways travelling through a grid
const travel = (x, y, memo = {}) => {
  if (x == 0 || y == 0) return 0
  if (x == 1 || y == 1) return 1
  if (x in memo) {
    if (y in memo[x]) {
      return memo[x][y]
    }
  } else {
    memo[x] = {}
  }
  memo[x][y] = travel(x - 1, y, memo) + travel(x, y - 1, memo)
  return memo[x][y]
}


console.log(travel(18, 18))

