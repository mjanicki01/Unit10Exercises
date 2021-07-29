
/* Given this function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  Refactor it to use the rest operator & an arrow function */

  function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
  }
  
  filterOutOdds(1, 2, 3, 5, 6);

/*   Write a function called findMin that accepts a variable number of arguments and returns the smallest amount.
  Make sure to do this using the rest and spread operator.
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

function findMin(...nums) {
    return Math.min(...nums)
}

findMin(2, 3, 5, 6);

/* Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys
and values of the first and second object
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
 */

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

/* Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function
should return a new array with the original array values and all of additional arguments doubled.
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

function doubleAndReturnArgs(arr, ...args) {
    return (arr + args.map(val => val*2));
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index +1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj}
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

 const combine = (obj1, obj2) => ({...obj1, ...obj2});



/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = { ...obj};
    newObj[key] = val
    return newObj;
}
