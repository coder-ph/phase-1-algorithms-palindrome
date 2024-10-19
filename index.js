function isPalindrome(word) {
  // Write your algorithm here
  const cleanedString = word.toLowerCase().replace(/[^a-z0-9]/g,'');
  const reversedWord = cleanedString.split('').reverse().join('')

  return cleanedString === reversedWord
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  first ensure your word is either in lowercase or upper case by using either .toLowerCase or .toUpperCase
  use the .replace(/[^a-z0-9]/g, '')to remove any nonstring character
  initialize a new variable and assign it a reversed version of the string by using the .split('') to split the words into array, .reverse() to reverse the array and .join() to join tha array of letters into string,
  compare the string with the revised string to check if it returns true or false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log(isPalindrome("racecar"))
}

module.exports = isPalindrome;
