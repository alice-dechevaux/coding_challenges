//08/21/2023

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  if (!str) {
    return true 
  }
  str = str.toLowerCase()
  let counts = {}
  str.split("").forEach((x) => counts[x] = (counts[x] || 0) + 1)
  for (let key in counts) {
    if (counts[key] > 1) {
      return false
    }
  }
  return true
}

//top solution

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//new Set() returns an array of values. Each value will only occur once. It can be used with iterable datatypes. It is a constructor and requires the use of "new"

//08/22/2023

//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space. 

function addLength(str) {
  return str.split(" ").map((x) => x + " " + x.length)
}

//top solution

function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

//same idea just using template literal instead of concatenation which is a bit cleaner 

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  let string = ""
  let result = 0
  for (let i = 0; i <= n; i++) {
    string += i ** 2
  }
for (let i = 0; i < string.length; i++) {
  if (string[i] == d) {
    result++
  }
}
return result
}

//top solution

function nbDig(n, d) {
  var res=0;
      for (var g=0;g<=n;g++){
        var square=(g*g+"").split("");
        square.forEach((s)=>s==d?res++:null)
      }return res;
  }

// This approach works similarly but uses .split to create an array of individual digits and a forEach loop to compare each array element to d. I did not know that you could use null with a ternary operator to do nothing when one of the two conditions is met