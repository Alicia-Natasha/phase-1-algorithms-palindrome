function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphabetic characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the cleaned string is equal to its reversed version
  return cleanedStr === reversedStr;
}

/* 
  Pseudocode:
  1. Convert the input string to lowercase and remove non-alphabetic characters.
  2. Reverse the cleaned string.
  3. Compare the cleaned string with its reversed version.
  4. Return true if they are equal, otherwise return false.
*/

/*
  Written explanation:
  The isPalindrome function takes a string as input and performs the following steps:
  1. Converts the string to lowercase and removes any non-alphabetic characters using a regular expression.
  2. Reverses the cleaned string by splitting it into an array of characters, reversing the array, and joining the characters back together.
  3. Compares the cleaned string with its reversed version.
  4. Returns true if they are equal, indicating that the input string is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;