// 01)  Find Pallindrome

// First Approach

// function findPallindrome1(text) {
//   let reverseText = text.split("").reverse().join("");
//   return reverseText === text;
// }
// console.log(findPallindrome1("madam"));

// Second Approach

// function findPallindrome2(text) {
//   let reverseText2 = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     reverseText2 += text[i];
//   }

//   return reverseText2 === text;
// }
// console.log(findPallindrome2("madam"));

// 02) Find Vowels

//  First Approach

function uniqueNumbers(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
function findVowles(text) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      result.push(text[i]);
    }
  }
  const finalRes = uniqueNumbers(result);

  return finalRes;
}
console.log(findVowles("aftab ee khan"));
