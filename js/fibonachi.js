let x = 0;
let y = 1;
let sum;
let iteration = prompt("Сколько итераций фибоначи вывести? ");
for (let i = 0; i <= iteration; i++){ 
  sum = x + y;
  x = y;
  y = sum;
  console.log("Результат: ",sum);
}