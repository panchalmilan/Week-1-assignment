/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  if (len1 !== len2) return false;

  const hashmap = {};
  // count frequency of chars from string 1
  for (let i = 0; i < len1; i++) {
    const ch = str1[i].toLowerCase();
    if (ch in hashmap) hashmap[ch]++;
    else hashmap[ch] = 1;
  }

  // delete frequency of chars from string 2
  for (let i = 0; i < len2; i++) {
    const ch = str2[i].toLowerCase();
    if (ch in hashmap) hashmap[ch]--;
    else return false; // char is not present in string 1
  }

  // check frequency of chars
  for (const ch in hashmap) {
    const freq = hashmap[ch];
    if (freq > 0) return false; // if freq of a char in str2 is greater than str1
  }

  return true;
}

module.exports = isAnagram;
