

// --------Add or Remove Elements ---------------//

// | Method      | Description                         |
// | ----------- | ----------------------------------- |
// | `push()`    | Adds element(s) to the end          |
// | `pop()`     | Removes the last element            |
// | `shift()`   | Removes the first element           |
// | `unshift()` | Adds element(s) to the beginning    |
// | `splice()`  | Adds, removes, or replaces elements |


// let arr = [1, 2, 3];

// arr.push(4);      // [1,2,3,4]
// arr.pop();        // [1,2,3]
// arr.unshift(0);   // [0,1,2,3]
// arr.shift();      // [1,2,3]


// ----------------- Copy & Merge Arrays ---------------------//

// | Method        | Description                             |
// | ------------- | --------------------------------------- |
// | `concat()`    | Merges arrays                           |
// | `slice()`     | Returns a portion of an array           |
// | `toSpliced()` | Non-mutating version of `splice()`      |
// | `with()`      | Returns a copy with one element changed |

// let a = [1, 2];
// let b = [3, 4];

// console.log(a.concat(b)); // [1,2,3,4]
// console.log(a.slice(1));  // [2]


// ----------------- Search Methods ---------------------//

// | Method            | Description                    |
// | ----------------- | ------------------------------ |
// | `indexOf()`       | First matching index           |
// | `lastIndexOf()`   | Last matching index            |
// | `includes()`      | Checks if value exists         |
// | `find()`          | Returns first matching element |
// | `findIndex()`     | Returns first matching index   |
// | `findLast()`      | Returns last matching element  |
// | `findLastIndex()` | Returns last matching index    |


// let nums = [10, 20, 30];

// nums.includes(20);   // true
// nums.indexOf(30);    // 2


// --------------------- Iteration Methods ---------------------- //

// | Method          | Description                                |
// | --------------- | ------------------------------------------ |
// | `forEach()`     | Executes function for each element         |
// | `map()`         | Creates a new transformed array            |
// | `filter()`      | Filters elements                           |
// | `reduce()`      | Reduces array to a single value            |
// | `reduceRight()` | Reduces from right to left                 |
// | `every()`       | Checks if all elements satisfy condition   |
// | `some()`        | Checks if at least one satisfies condition |
// | `flatMap()`     | Maps and flattens one level                |

// let arr = [1, 2, 3];

// arr.map(x => x * 2);        // [2,4,6]
// arr.filter(x => x > 1);     // [2,3]
// arr.reduce((a, b) => a + b); // 6


// ------------------ Sorting and Reversing ---------------//

// | Method         | Description          |
// | -------------- | -------------------- |
// | `sort()`       | Sorts array          |
// | `reverse()`    | Reverses array       |
// | `toSorted()`   | Non-mutating sort    |
// | `toReversed()` | Non-mutating reverse |

// let arr = [3, 1, 2];

// arr.sort();      // [1,2,3]
// arr.reverse();   // [3,2,1]


// -------------- Convert Arrays ---------------- //

// | Method             | Description                    |
// | ------------------ | ------------------------------ |
// | `join()`           | Converts array to string       |
// | `toString()`       | Converts array to string       |
// | `toLocaleString()` | Locale-aware string conversion |


// ["A", "B", "C"].join("-");      // "A-B-C"

// ---------------- Static Methods -----------------//
// Array.isArray()
// Array.from()
// Array.of()
// Array.fromAsync() (modern JavaScript environments)

// For interviews and day-to-day development, focus especially on: 
// map(), filter(), reduce(), find(), findIndex(), some(), every(), includes(), 
// sort(), splice(), slice(), push(), pop(), shift(), unshift(), flat(), and flatMap(). 
// These are the most frequently used.

