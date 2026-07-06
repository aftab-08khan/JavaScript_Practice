// Problem: Check if a string is a palindrome

// Approach 1
function findPalindrome1(text) {
  return text === text.split("").reverse().join("");
}

console.log(findPalindrome1("madam"));

// Approach 2
function findPalindrome2(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed === text;
}

console.log(findPalindrome2("madam"));