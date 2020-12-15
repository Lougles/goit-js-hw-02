const calculateEngravingPrice = function (message, pricePerWord) {
  console.log("Текст: ",message);
  console.log("Цена за слово: ", pricePerWord);
  console.log("Количество слов: ",message.split(" ").length);
  let devide = message.split(" ");
  let length = devide.length;
  let multiply = pricePerWord * length;
  return multiply;
};

console.log("Сумма к оплате: ",
  calculateEngravingPrice(
    'Hello Kiev Ukraine, im studying javascript',
    50,
  ),
); //300 
console.log("Сумма к оплате: ",
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log("Сумма к оплате: ",
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log("Сумма к оплате: ",
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
console.log("==============================================================================");

