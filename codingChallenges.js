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