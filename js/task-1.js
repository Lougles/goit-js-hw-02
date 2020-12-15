const logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


const logFunction = function (array) {
  console.log("Изначальный массив: ", array);
  for (let i = 0; i < array.length; i += 1) {
    let element = i + 1 + ' - ';
    element = element.concat(array[i]);
    array[i] = element;
  }
  return array;
}

const outputLog = logFunction(logItems);
console.log("Результат: ",outputLog);
const outputNum = logFunction(numItems);
console.log("Результат: ", outputNum);
console.log("==============================================================================");
