/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

const a_ASCII = 97;
const z_ASCII = 122;

function isPalindrome(str) {
  const s = str.toLowerCase();
  let formattedStr = '';
  for (let i = 0; i < s.length; i++) {
    const ascii = s.charCodeAt(i);
    if (a_ASCII <= ascii && ascii <= z_ASCII)
      formattedStr = formattedStr + s[i];
  }
  const n = formattedStr.length;

  for (let i = 0; i < n / 2; i++) {
    const elem = formattedStr[i];
    const mirrorElem = formattedStr[n - i - 1];
    if (elem !== mirrorElem) return false;
  }
  return true;
}

module.exports = isPalindrome;
