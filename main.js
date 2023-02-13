// .map() creates a new array populated with the results of calling a provided function on every element in the calling array.
const newMapFunc = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

const array1 = [1, 4, 9, 16];
const doubleNum = newMapFunc(array1, (num) => num * 2);
console.log(doubleNum);

// .reduce() executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const newReduceFunc = (array, callback, value) => {
  let acc = value ? value : 0;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], value);
  }
  return acc;
};

const array2 = [6, 18, 36, 72];
const sum = newReduceFunc(array2, (acc, currentValue) => acc + currentValue, 0);
console.log(sum);

// .filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
const newFilterFunc = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const array3 = [5, 23, 44, 56];
const filterOverThirty = newFilterFunc(array3, (num) => num > 30);
console.log(filterOverThirty);
