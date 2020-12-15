const formatString = function (string) {
  console.log('Строка оригинальная: ',string);
  if (string.length > 40) {
    string = string.substr(0, 40);
    string = string + "..."
  }
  return string;
}
console.log("Результат: ", formatString('Hello this is a 4-th task for my second homework.'))
// моя строка
console.log("Результат: ",formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log("Результат: ",formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log("Результат: ",formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log("Результат: ",
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
console.log("==============================================================================");

