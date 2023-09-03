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

//08/29/2023

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(string) {
  string = string.split(",")
  if (string.length < 3) {
    return null 
  }
  string.pop()
  string.shift()
  return string.join(" ")
}

//top solution 

function array(string){
  return string.split(",").slice(1,-1).join(" ") || null;
}

//08/30/2023

// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

function foldArray(array, runs)
{
  console.log(array)
  let copy = array
  let result
  for (let i = 0; i < runs; i++) {
    result = []
    let x = copy.length - 1
    for (let j = 0; j < x; j++) {
      result.push(copy[j] + copy[x])   
      x--
    }
    if (copy.length % 2 !== 0) {
      result.push(copy[Math.floor(copy.length / 2)])
    }
    copy = result
  }
  return result;
}

//top solution

function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}

//08/31/2023

// I assume you are all familiar with the famous Fibonacci sequence, having to get each number as the sum of the previous two (and typically starting with either [0,1] or [1,1] as the first numbers).

// While there are plenty of variation on it (including a few I wrote), usually the catch is all the same: get a starting (signature) list of numbers, then proceed creating more with the given rules.

// What if you were to get to get two parameters, one with the signature (starting value) and the other with the number you need to sum at each iteration to obtain the next one?

// And there you have it, getting 3 parameters:

//     a signature of length length
//     a second parameter is a list/array of indexes of the last length elements you need to use to obtain the next item in the sequence (consider you can end up not using a few or summing the same number multiple times)' in other words, if you get a signature of length 5 and [1,4,2] as indexes, at each iteration you generate the next number by summing the 2nd, 5th and 3rd element (the ones with indexes [1,4,2]) of the last 5 numbers
//     a third and final parameter is of course which sequence element you need to return (starting from zero, I don't want to bother you with adding/removing 1s or just coping with the fact that after years on CodeWars we all count as computers do):

//first solution 

function customFib(signature, indexes, n) {
  if (n < signature.length) {
    return signature[n]
  }
  else {
    let next = 0
    while (signature.length <= n) {
      for(let i = 0; i < indexes.length; i++) {
        next += signature[indexes[i]]
        indexes[i] += 1
      }
      signature.push(next)
      next = 0
    }
    console.log(signature)
      return signature[n]
  }
}

//second solution using recursion 

function customFib(signature, indexes, n) {
  if (n < signature.length) {
    console.log(signature)
    return signature[n]
  } else {
    let next = 0
    for (let i = 0; i < indexes.length; i++) {
      next += signature[indexes[i]]
      indexes[i] += 1
    }
    signature.push(next)
    return customFib(signature, indexes, n)
  }
}

//top solution 

function customFib(signature, indexes, n){
  
  if (n < signature.length)
    return signature[n];

  let term = indexes.reduce((a, b) => a + signature[b], 0)
  let next = signature.slice(1).concat(term);
  
  return customFib(next, indexes, n - 1);

}

//The use of reduce here to find the next element makes sense to me and I think is a good idea as it reduces four lines of code to one. Removing the first element of the signature array and returning the function with n-1 as a parameter seems unnecessary though

//09/01/2023

// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
  arr = arr.map((x) => x.split(":"))
  result = []
  pair1 = []
  pair2=[]
  pair1.push(arr[0][0], arr[1][1])
  pair1 = pair1.join(":")
  pair2.push(arr[1][0], arr[0][1])
  pair2 = pair2.join(":")
  result.push(pair1, pair2)
  return result
}

//top solution

function tailSwap(arr) {
  let newArr = arr
  .map(string => string.split(':'))
  return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
}

//Using concatenation here makes a whole lot of sense and makes things much simpler

//09/02/2023

// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).

function matrixAddition(a, b){
  let sum = 0
  let result = []
  let row
  for (let i = 0; i < a.length; i++) {
    row = []
    for (let j = 0; j < a[i].length; j++) {
      sum = a[i][j] + b[i][j]
      row.push(sum)
    }
    result.push(row)
  }
  return result
}

//top solution

function matrixAddition(a, b){
  return a.map(function(n, i){
    return n.map(function(o, j){
      return o + b[i][j];
    });
  });
}

//09/03/2023

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let result = []
  for (let i = 1; integer * i <= limit; i++) {
    result.push(integer * i)
  }
  return result
}

//top solution

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}




//git commit -a --allow-empty-message -m ''