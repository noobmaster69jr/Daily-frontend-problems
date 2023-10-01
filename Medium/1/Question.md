You are tasked with implementing a JavaScript function called customReduce(arr, callback, initialValue) that mimics the behavior of the built-in reduce function. The customReduce function should iterate through the elements of an array arr and apply a callback function to each element, accumulating a result based on the specified initialValue. The accumulated result should be returned at the end.

Write the customReduce function and provide an example of how it can be used:

````function customReduce(arr, callback, initialValue) {
  // Your code here
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const sum = customReduce(numbers, (acc, current) => acc + current, 0);

console.log(sum); // Should print 15```

In this example, the customReduce function should take an array of numbers, an accumulator function that adds each element to the accumulator, and an initial value of 0. The result should be the sum of all numbers in the array.

Constraints:

The customReduce function should have the same behavior as the built-in reduce function.
It should support an initial value, but if not provided, the first element of the array should be used as the initial value.
The callback function should take two arguments: the accumulator and the current element, and it should return the updated accumulator.

````
