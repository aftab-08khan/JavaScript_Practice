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

// function uniqueNumbers(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// function findVowles(text) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let result = [];

//   for (let i = 0; i < text.length; i++) {
//     if (vowels.includes(text[i])) {
//       result.push(text[i]);
//     }
//   }
//   const finalRes = uniqueNumbers(result);

//   return finalRes;
// }
// console.log(findVowles("aftab ee khan"));

// 03) Find Missing Numbers In An Array

// First Approach

// function missingNumbers(arr) {
//   let res = [];
//   let sorted = arr.sort((a, b) => a - b);

//   for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
//     if (!arr.includes(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(missingNumbers([1, 2, 3, 5, 7, 9]));

// 04) Move All Zero At the End

// Frist Approach

// const arr = [0,-43,34545,4545,6,6,0,244,0,9]
// function moveZeros(numbers){
//    let res = []

//    for(let i = 0 ; i < numbers.length ; i++){
//     if(numbers[i] === 0){
//         res.push(numbers[i])
//     }else{
//       res.unshift(numbers[i])
//     }
//    }

//    return res

// }

// console.log(moveZeros(arr));

// 05) FInd ToSum from An Array

// First Approach
const arr = [2, 3, 4, 5, 6, 7, 8, 9];

function toSum(numbers, target) {
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        
      if (numbers[i] + numbers[j] === target) {
        
        res.push([numbers[i] , numbers[j] ]);
      }
    }
  }
  return res;
}

console.log(toSum(arr, 12));
