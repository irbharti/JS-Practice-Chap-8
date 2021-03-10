// vowel vount

let word = prompt("Enter a word")
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let count = 0;

for(let i = 0; i <word.length; i++){
  if (vowel.indexOf(word[i]) !== -1)
  {
    count += 1;
  }
  return count;
}
console.log(word.length);
console.log(word.toLowerCase());
console.log(word.toUpperCase());