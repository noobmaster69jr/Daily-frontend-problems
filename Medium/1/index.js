function customReduce(arr, callback, initialValue) {
  arr.forEach((element) => {
    initialValue = callback(initialValue, element);
  });

  return initialValue;
}

const numbers = [1, 2, 3, 4, 5];

const sum = customReduce(numbers, (acc, current) => acc + current, 0);

console.log(sum);
