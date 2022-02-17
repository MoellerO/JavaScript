function flippingMatrix(matrix) {
  // Write your code here
  // reverse each row so that highest elements left
  bestCols = []
  matrix.forEach(el => {
    let fh = el.splice(0, (el.length / 2))
    let sh = el.splice(0)

    if (mySum(fh) >= mySum(sh)) {
      bestCols.push(fh)
    } else {
      bestCols.push(sh)
    }
  })
  console.log(bestCols)
  // reverse cols so that highest elements top
  var out = 0
  for (var col = 0; col < bestCols[0].length; col++) {
    let fsum = 0
    let ssum = 0
    for (var row = 0; row < bestCols.length / 2; row++) {
      fsum += bestCols[row][col]
      ssum += bestCols[bestCols.length - 1 - row][col]
    }
    fsum > ssum ? out += fsum : out += ssum
  }
  console.log(out)
  return out
}


const mySum = s => {
  sum = 0
  s.forEach(el => sum += el)
  return sum
}

let matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]

flippingMatrix(matrix)

