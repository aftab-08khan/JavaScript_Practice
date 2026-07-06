function moveZeros(numbers) {
  const result = [];
  let zeroCount = 0;

  for (const num of numbers) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  while (zeroCount--) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros([0, -43, 34545, 4545, 6, 6, 0, 244, 0, 9]));