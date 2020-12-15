let input;
const numbers = [];
let total = 0;

while (true) { 
  input = prompt("Введите числа");

  if (!input) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
  total += input;
}
console.log(`Сумма чисел масива: ${total}`);
console.log("Массив: ", numbers)
console.log("==============================================================================");
