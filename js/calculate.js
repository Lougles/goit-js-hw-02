const result = prompt("Калькулятор(практика). Введите цифру, ПРОБЕЛ оператор(+,-,*,/) ПРОБЕЛ и вторую цифру");
const calculate = operation => {
   const [numberFirst, operator, numberSecond] = operation.split(" ");
   switch (operator) {
      case "+":
         return +numberFirst + +numberSecond;
      case "/":
         return +numberFirst / +numberSecond;
      case "-":
         return +numberFirst - +numberSecond;
      case "*":
         return +numberFirst * +numberSecond;
      default:
         return 0;
   }
}
console.log("Результат: ", calculate(result));
console.log("==============================================================================");

