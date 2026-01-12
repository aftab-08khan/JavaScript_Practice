// 01)  Find Pallindrome

// First Approach

// function findPallindrome1(text) {
//   let reverseText = text.split("").reverse().join("");
//   return reverseText === text;
// }
// console.log(findPallindrome1("madam"));

// Second Approach

function findPallindrome2(text) {
  let reverseText2 = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseText2 += text[i];
  }

  return reverseText2 === text;
}
console.log(findPallindrome2("madam"));
