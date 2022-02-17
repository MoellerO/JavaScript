function palindromeIndex(s) {
  // Write your code here
  let len = s.length
  if (len <= 1) return -1

  // check if already palindrom
  var err_index = -1
  for (var i = 0; i < len / 2; i++) {
    if (s[i] != s[len - i - 1]) {
      console.log(`error in ${s} at: ${s[i]}, ${i}`)
      if (err_index == -1) {
        if (s[i + 1] == s[len - i - 1]) {
          console.log(`Bef: ${s}`)
          let acc = s.slice(0, i) + s.slice(i + 1)
          console.log(`Aft: ${s}`)

          if (isPal(acc)) {
            err_index = i
            s = acc
            len = len - 1
          }
        }

        if ((s[i] == s[len - i - 2]) && err_index == -1) {
          let acc = s.slice(0, len - i - 1) + s.slice(len - i)
          if (isPal(acc)) {
            err_index = len - i - 1
            s = acc
            len = len - 1
          }
        }
      } else {
        return -1
      }
    }
  }
  return err_index
}


const isPal = s => {
  for (var i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - i - 1]) {
      return false
    }
  }
  return true
}

console.log(palindromeIndex('bcbc'))
console.log(palindromeIndex('aaabaaaaa'))
console.log(palindromeIndex('hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh'))
