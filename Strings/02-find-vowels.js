function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function findVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = [];

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      result.push(text[i]);
    }
  }

  return unique(result);
}

console.log(findVowels("aftab ee khan"));