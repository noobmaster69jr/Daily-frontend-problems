function curry(func) {
  const numArgs = func.length;

   function curried(...args) {
    if (args.length >= numArgs) {
      return func(...args);
    } else {
    
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  }
  return curried
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));