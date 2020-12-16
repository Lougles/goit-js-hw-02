console.log("Task-7. Soon");
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log("Список логинов: ",logins);
const isLoginValid = function (login) {
  // console.log("",login);
  let flag = false;
  if (login.length > 3 && login.length <= 16)
  {
    flag = true;
  }
  return flag;
};
const isLoginUnique = function (allLogins, login) {
  // console.log(allLogins, login);
  let flag = true;
  for (let i = 0; i < allLogins.length; i += 1) {
    // console.log(allLogins[i]);
    if (allLogins[i] === login) {
      flag = false;
    }
  }
  return flag;
};
const addLogin = function (allLogins, login) {
  let message = "";
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    // allLogins = push(login);
    allLogins.push(login);
    message = `Логин ${login} успешно добавлен!`;
  } else if (!isLoginValid(login)) {
    message = `Ошибка! Логин ${login} должен быть от 4 до 16 символов`
  } else if (!isLoginUnique(allLogins, login)) {
    message = `Такой логин ${login} уже используется!`;
  }
  return message;
};
console.log(addLogin(logins, 'Lougle')); 
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log("Обновленный список логинов: ",logins);
console.log("==============================================================================");
