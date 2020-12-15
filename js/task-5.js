console.log("Task-5");
const checkForSpam = function (message) {
  message = message.toLowerCase();
  console.log("Строка: ",message);
  let check = false;
  let arr = ['spam', 'sale'];
  for (let i of arr) {
    if (message.indexOf(i) > -1) {
      check = true;
      break;
    }
  }
  return check;
};

console.log("Результат: ", checkForSpam('I like spam in my code, but debugging is not happy about it'));

console.log("Результат: ",checkForSpam('Latest technology news')); // false

console.log("Результат: ",checkForSpam('JavaScript weekly newsletter')); // false

console.log("Результат: ",checkForSpam('Get best sale offers now!')); // true

console.log("Результат: ", checkForSpam('[SPAM] How to earn fast money?')); // true

console.log("==============================================================================");
