function flippingMatrix(matrix) {
  // Write your code here
  let out = []
  let len = matrix.length - 1
  let n = Math.floor(matrix.length / 2)
  let max_sum = 0
  for (var row = 0; row < n; row++) {
    let acc = []
    for (var col = 0; col < n; col++) {

      let q1 = matrix[row][col]
      let q2 = matrix[len - row][col]
      let q3 = matrix[row][len - col]
      let q4 = matrix[len - row][len - col]
      let max = Math.max(q1, q2, q3, q4)
      acc.push(max)
      max_sum += max
    }
    out.push(acc)
  }
  console.log(out)
  console.log(max_sum)
  return max_sum
}


let matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]

flippingMatrix(matrix)

