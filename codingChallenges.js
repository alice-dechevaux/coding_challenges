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

//08/23/2034

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
  let sumLeft
  let sumRight
  for (let i = 0; i < arr.length; i++) {
    sumLeft = 0
    sumRight = 0
    for (let j = i - 1; j >= 0; j--) {
      if (!arr[j]) {
        break
      } else sumLeft += arr[j]
    }
    for (let k = i + 1; k < arr.length; k++) {
      sumRight += arr[k]
    }
    if (sumLeft === sumRight) {
      return i
    }
  }
  return -1
}

//top solution

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}

//This is a more efficient approach to the problem that simply makes one adjustment to both sums for each index of the array instead of iterating through the entire array again every time 


//08/24/2023

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
  let result = []
  let values = [r, g, b]
  for (i in values) {
    values[i] = values[i] < 0 ? 0 : values[i]
    values[i] = values[i] > 255 ? 255 : values[i]
    result.push(Math.floor(values[i]/16), values[i]%16)
  }
  for(i in result) {
    result[i] = result[i].toString(16).toUpperCase()
    }
  return result.join("")
}

//top solution

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

//Number.toString(16) will convert any number into a hex value so splitting the digits before converting in my code was redundant. Adding the zero here accounts for single digit results while .slice(-2) removes the 0 in the case of two digit results. The use of Number() is unnecessary as the input value is already a number and would need to be in order for the preceding comparisons to 0 and 255 to work. The abstraction of the toHex function away from the rgb function also seems unnecessary as expanding the code to allow for conversion to another color type would still require writing two additional functions. Maybe you could solve this problem by adding the conversion function as a parameter? But I'm not sure if there's a way to get around the need to call the function by name

//08/25/2023



//git commit -a --allow-empty-message -m ''


