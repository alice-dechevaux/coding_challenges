//09/07/2023

//  Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
// If the second string isn't a valid rotation of the first string, the method returns -1. 

function shiftedDiff(first,second){
  first = first.split("")
  second - second.split("")
  let result
  let counter = 0
  for (let i = 0, j = 0, checked = 0; checked < first.length; checked ++, i++) {
      if (i === first.length) {
        i -= first.length  
      }
    if (first[i] === second[j]) {
      counter++
      j++
      result = first.length - (i + 1)
      checked--
    }
  }
  console.log(counter)
  if (counter === first.length) {
    return result
  }
  else return -1
}

//top solution

function shiftedDiff(first, second) {
    if (first.length != second.length) return -1
    return (second + second).indexOf(first)
  }

//This is such a simple solution that I'm sort of upset I didn't think of it. If the lengths don't match the conditions cannot be met so -1 is returned. Otherwise second is concatenated with itself. If second is a shifted string indexOf(first) will find the complete first string (made whole by the concatenation) and return its index which is equal to the number of spaces it has been shifted. If it isn't indexOf will not find first and will return -1.