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

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  for (let i = 0; i < a.length; i++) {
    if (i != a.lastIndexOf(a[i])) {
      a.splice(a.lastIndexOf(a[i]), 1)
      i--
    }
  }
  return a
}

//Above was my initial solution but after thinking about how to simplify and remember what I've learned about sets I came up with this much simpler solution:

function distinct(a) {
  return Array.from(new Set(a))
}

//top solution

function distinct(a) {
  return [...new Set(a)];
}

//Same idea just uses a different method of converting the set to an array

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer. 

function solve(arr){
  console.log(arr)
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] * -1) {
        arr.splice(i, 1)
        j--
        arr.splice(j, 1)
        i--
      }
    }
  }
  return arr[0]
};

//top solution 

const solve=a=>a.find(e=>!a.includes(-e));

//No explanation necessary. Completely forgot about array.find()

//08/26/2023

// The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).
// Task:

// Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

// input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
// valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.


function availableMoves(position) {
  if (typeof position !== "string") {
    return []
  }
  let valid = []
  for (let i = 1; i <= 8; i++) {
  for (let j = 65; j <= 72; j++) {
    valid.push(String.fromCharCode(j) + i)
  }
  }
  if (valid.indexOf(position) === -1) {
    return []
  }
  let size = 8
  let row = []
  let board = []
  let result = []
  for (let i = 65; i <= 72; i++) {
    row.push(String.fromCharCode(i))
  }
  for (let i = 0; i < size; i++) {
    board.push(row)
  }
  console.log(position)
  let letter = position.charCodeAt(0) - 65
  let number = Number(position[1]) - 1
  
  for (let i = number + 1, j = letter - 1, k = letter + 1, l = number - 1; i < size; i++, j--, k++) {
    if (j >= 0) {
      result.push(String.fromCharCode(j + 65) + (i + 1))
    }
    if (k < size) {
      result.push(String.fromCharCode(k + 65) + (i + 1))
    }
  }
  for (let i = number - 1, j = letter - 1, k = letter + 1, l = number - 1; i >= 0; i--, j--, k++) {
    if (j >= 0) {
      result.push(String.fromCharCode(j + 65) + (i + 1))
    }
    if (k < size) {
      result.push(String.fromCharCode(k + 65) + (i + 1))
    }
  }
  for (let i = letter + 1; i < size; i++) {
    result.push(String.fromCharCode(i + 65) + (Number(number) + 1))
  }
  for (let i = letter - 1; i >= 0; i--) {
    result.push(String.fromCharCode(i + 65) + (Number(number) + 1))
  }
  for (let i = number + 1; i < size; i++) {
    result.push(String.fromCharCode(letter + 65) + (i + 1))
  }
  for (let i = number - 1; i >= 0; i--) {
    result.push(String.fromCharCode(letter + 65) + (i + 1))
  }
  return result.sort()
}

//This code is messy and bad but it works. I sort of struggled with this problem until I drew it out and started thinking of the chessboard as an array of arrays rather than one big array.

//top solution 

const BOARD = [..."ABCDEFGH"].map(file => [..."12345678"].map(rank => file + rank));
const Q_DIRS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function availableMoves(position) {
  if (!(/^[A-H][1-8]$/).test(position)) return [];
  const res = [],
    r = position[0].charCodeAt() - 65,
    c = position[1] - 1;
  for (const [dx, dy] of Q_DIRS)
    for (let x = r + dx, y = c + dy; BOARD[x] && BOARD[x][y]; x += dx, y += dy)
      res.push(BOARD[x][y]);
  return res.sort();
}

//I don't fully understand this code yet but I'm going to come back and try to figure it out tomorrow


//08/27/2023

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...

// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
// Notes:

//     In the result codes and their values are in the same order as in M.
//     See "Samples Tests" for the return.



function stockList(listOfArt, listOfCat){
  let result = ""
  console.log(listOfArt)
  console.log(listOfCat)
  if (listOfArt.length === 0|| listOfCat.length === 0) {
    return result
  }
  let sum
  let split
  for (let i = 0; i < listOfCat.length; i++) {
    sum = 0
    for (let j = 0; j < listOfArt.length; j++) {
      if (listOfCat[i] === listOfArt[j][0]) {
        split = listOfArt[j].split(" ")
        sum += Number(split[1])
      }
    }
          result += `(${listOfCat[i]} : ${sum}) - `
  }
  return (result.slice(0, -3))
}

//top solution

function stockList(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';  
  }).join(' - ');  
}

//08/28/2023

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n)
{
  if (n < 0 || n > 12) {
    throw new RangeError("Invalid input")
  }
  else if ( n === 0) {
    return 1
  } else return n * factorial(n - 1)
}

//top solution

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

//This condenses the code by using the ternary operator instead of the else if statement

//git commit -a --allow-empty-message -m ''