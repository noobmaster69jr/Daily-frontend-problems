
You are tasked with implementing a JavaScript function called curry(func) that takes a function func as an argument and returns a curried version of that function. The curried function should be able to accept arguments one at a time and return a new function with each argument until all arguments have been provided. When all arguments are provided, the curried function should return the result of calling the original function with those arguments.

Write the curry function and provide an example of how it can be used:
```
function curry(func) {
  // Your code here
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Should print 6
```

In this example, the curry function should take the add function and return a curried version of it. The curried function should accept arguments one at a time and return a new function with each argument until all arguments have been provided, at which point it should return the result of adding the three arguments.

Constraints:

 - The curry function should work with functions of varying arity (number of arguments).
 - The curried function should be able to accept arguments one at a time or all at once.
