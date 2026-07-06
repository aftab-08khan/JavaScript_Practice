function twoSum(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push([numbers[i], numbers[j]]);
      }
    }
  }

  return result;
}

console.log(twoSum([2, 3, 4, 5, 6, 7, 8, 9], 12));