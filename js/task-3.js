const findLongestWord = function (string) {
  console.log("Строка: ",string);
  const words = string.split(" ");
  let longWord = "";
  for (let i = 0; i < words.length; i += 1){
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
};
console.log(("Самое длинное слово: "),findLongestWord('London is the capital of Great Britan')); // 'capital'

console.log(("Самое длинное слово: "),findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(("Самое длинное слово: "),findLongestWord('Google do a roll')); // 'Google'

console.log(("Самое длинное слово: "), findLongestWord('May the force be with you')); // 'force'

console.log("==============================================================================");
