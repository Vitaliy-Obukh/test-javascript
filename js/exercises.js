// Задача 1: Перевірка віку
// Напиши функцію checkAge(age), яка:
//     Якщо вік користувача менше 18, повертає рядок: "Access denied. You are too young.".
//     Якщо вік дорівнює або більше 18, але менше 65, повертає рядок: "Access granted. Welcome!".
//     Якщо вік дорівнює або більше 65, повертає рядок: "Access granted. Enjoy your senior benefits!".
// function checkAge(age) {
//   if (age < 18) {
//     return "Access denied. You are too young.";
//   } else if (age >= 18 && age < 65) {
//     return "Access granted. Welcome!";
//   } else if (age >= 65) {
//     return "Access granted. Enjoy your senior benefits!";
//   }
// }

// Задача 2: Визначення дня тижня
// Напиши функцію getDayMessage(day), яка:
//     Приймає номер дня тижня (1 — понеділок, 2 — вівторок і так далі до 7 — неділя).
//     Повертає повідомлення, наприклад:
//         "Monday: Time to start the week!" для понеділка.
//         "Friday: Almost weekend!" для п'ятниці.
//         "Sunday: Relax and recharge!" для неділі.
//     Якщо введено число не від 1 до 7, повертає: "Invalid day number!".

//     function getDayMessage(day) {
//         switch (day){
//             case 1:
//                 return "Monday: Time to start the week!";
//                 break;
//             case 2:
//             case 3:
//             case 4:
//                 return "Very good works day!";
//                 break;
//             case 5:
//                 return "Friday: Almost weekend!";
//                 break;
//             case 6:
//                 return "Very good relax day!";
//                 break;
//             case 7:
//                 return "Sunday: Relax and recharge!";
//                 break;
//             default:
//                 return "Invalid day number!";
//                 break;
//         }
//     }

// Задача 3: Порівняння трьох чисел
// Напиши функцію compareThreeNumbers(a, b, c), яка:
//     Приймає три числа.
//     Повертає найбільше з трьох чисел у рядку: "The largest number is X".
//     Якщо всі три числа рівні, повертає: "All numbers are equal".
// function compareThreeNumbers(a, b, c) {
//   if (a === b && b === c) {
//     return "All numbers are equal";
//   } else if (a >= b && a >= c) {
//     return `The largest number is ${a}`;
//   } else if (b >= a && b >= c) {
//     return `The largest number is ${b}`;
//   } else {
//     return `The largest number is ${c}`;
//   }
// }

// Задача 4: Перевірка парності
// Напиши функцію isEvenOrOdd(number), яка:
//     Приймає число.
//     Повертає:
//         "Even" — якщо число парне.
//         "Odd" — якщо число непарне.
//         function isEvenOrOdd(number) {
//             if (number % 2 === 0) {
//                 return `Even`;
//             } else {
//                 return `Odd`;
//             }
// }
//        Альтернативне рішення
// function isEvenOrOdd(number) {
//     return number % 2 ? `Ewen` : `Odd`;
// }

// Задача 5: Калькулятор з розгалуженням
// Напиши функцію calculate(a, b, operator), яка:
//     Приймає два числа a та b, а також оператор operator ("+", "-", "*", "/").
//     Виконує відповідну операцію між числами:
//         "+" додає числа.
//         "-" віднімає друге число з першого.
//         "*" множить числа.
//         "/" ділить перше число на друге (перевіряй, щоб не було ділення на нуль).
//     Повертає результат операції або повідомлення "Invalid operator" для невідомого оператора.
//         function calculate(a, b, operator) {
//             if (operator === '+') {
//                 return a + b;
//             } else if (operator === '-') {
//                 return a - b;
//             } else if (operator === '*') {
//                 return a * b;
//             } else if (operator === '/') {
//                 if (b === 0) {
//                   return `Division by zero is not allowed`;
//                 }
//                 return a / b;
//             } else {
//                 return `Invalid operator`;
//             }
// }
//         Альтернативне рішення
// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b === 0 ? 'Division by zero is not allowed' : a / b;
//         default:
//             return 'Invalid operator';

//             }
//         }

// Задача 6: Класифікація оцінок
// Напиши функцію getGradeMessage(score), яка:
//     Приймає оцінку (число від 0 до 100).
//     Повертає повідомлення на основі значення:
//         "Excellent" для 90-100.
//         "Good" для 75-89.
//         "Satisfactory" для 50-74.
//         "Fail" для 0-49.
//     Якщо оцінка виходить за межі 0 - 100, повертає "Invalid score!".
// function getGradeMessage(score) {
//     if (score < 0 || score > 100) {
//         return 'Invalid score!'
//     }   else if (score >= 0 && score <= 49) {
//         return 'Fail';
//     } else if (score >= 50 && score <= 74) {
//         return 'Satisfactory';
//     } else if (score >= 75 && score <= 89) {
//         return 'Good';
//     } else if (score >= 90 && score <= 100) {
//         return 'Excellent';
//     }
// }

// =======  Логічні оператори  =======

// Задача 1: Перевірка віку
// Напиши функцію isAdult(age), яка приймає число age і:
//     Повертає true, якщо age знаходиться в діапазоні від 18 до 60 включно.
//     Інакше повертає false.
// function isAdult(age) {
//     return age >= 18 && age <= 60;
// }
//     console.log(isAdult(25)); // true
// console.log(isAdult(17)); // false
// console.log(isAdult(60)); // true
// console.log(isAdult(61)); // false

// Задача 2: Чи є число у діапазоні (виключно)
// Напиши функцію isInRange(start, end, number), яка:
//     Повертає true, якщо number знаходиться в діапазоні строго між start і end.
//     Інакше повертає false.
// function isInRange(start, end, number) {
//     return number > start && number < end;
// }
//     console.log(isInRange(10, 20, 15)); // true
// console.log(isInRange(10, 20, 10)); // false
// console.log(isInRange(10, 20, 20)); // false
// console.log(isInRange(10, 20, 25)); // false

// Задача 3: Перевірка доступу
// Напиши функцію checkAccess(role), яка приймає строку role (роль користувача):
//     Якщо роль — "admin" або "moderator", функція повертає "Access granted".
//     Інакше повертає "Access denied".
// function checkAccess(role) {
//     return role === "admin" || role === "moderator" ? 'Access granted' : "Access denied";
// }
//     console.log(checkAccess("admin"));      // "Access granted"
// console.log(checkAccess("moderator")); // "Access granted"
// console.log(checkAccess("user"));      // "Access denied"
// console.log(checkAccess("guest"));     // "Access denied"

// Задача 4: Чи всі числа парні
// Напиши функцію areAllEven(a, b, c), яка приймає три числа і:
//     Повертає true, якщо всі числа парні.
//     Інакше повертає false.
// function areAllEven(a, b, c) {
//     return a % 2 === 0 && b % 2 === 0 && c % 2 === 0;

// }
//     console.log(areAllEven(2, 4, 6)); // true
// console.log(areAllEven(2, 5, 6)); // false
// console.log(areAllEven(1, 3, 5)); // false
// console.log(areAllEven(0, 8, 10)); // true

// Задача 5: Логін і пароль
// Напиши функцію isLoginValid(username, password), яка:
//     Повертає true, якщо:
//         username дорівнює "admin" і password дорівнює "1234".
//     Інакше повертає false.
// function isLoginValid(username, password) {
//     return username === "admin" && password === "1234";
// }
//     console.log(isLoginValid("admin", "1234")); // true
// console.log(isLoginValid("user", "1234"));  // false
// console.log(isLoginValid("admin", "4321")); // false
// console.log(isLoginValid("guest", "guest")); // false

// Задача 6: Число ділиться на 3 і 5
// Напиши функцію isDivisibleByThreeAndFive(number), яка:
//     Повертає true, якщо число ділиться на 3 і 5 без залишку.
//     Інакше повертає false.
// function isDivisibleByThreeAndFive(number) {
//     return number % 3 === 0 && number % 5 ===0;
// }
//     console.log(isDivisibleByThreeAndFive(15)); // true
// console.log(isDivisibleByThreeAndFive(10)); // false
// console.log(isDivisibleByThreeAndFive(9));  // false
// console.log(isDivisibleByThreeAndFive(30)); // true

// Задача 7: Перевірка істинності
// Напиши функцію areBothTrue(a, b), яка:
//     Повертає true, якщо обидва параметри a і b є істинними (truthy).
//     Інакше повертає false.
// function areBothTrue(a, b) {
//     return a === true && b === true;
// }
//     console.log(areBothTrue(true, true));   // true
// console.log(areBothTrue(true, false));  // false
// console.log(areBothTrue(1, "hello"));   // true
// console.log(areBothTrue(0, "world"));   // false

// Задача 8: Щонайменше одне true
// Напиши функцію isAtLeastOneTrue(a, b, c), яка:
//     Повертає true, якщо хоча б один із параметрів a, b, або c є істинним (truthy).
//     Інакше повертає false.
// function isAtLeastOneTrue(a, b, c) {
//     return a === true || b === true || c === true;
// }
//     console.log(isAtLeastOneTrue(true, false, false)); // true
// console.log(isAtLeastOneTrue(false, false, false)); // false
// console.log(isAtLeastOneTrue(0, "", 1));           // true
// console.log(isAtLeastOneTrue(null, undefined, NaN)); // false

// =========== Метод рядка ===========

// Задача 1: Перша літера велика
// Напиши функцію capitalizeFirstLetter(string), яка:
//     Приймає рядок.
//     Повертає той самий рядок, але перша літера має бути великою, а решта — маленькими.
// function capitalizeFirstLetter(string) {
//     if (string.length === 0) {    ----  перевіряємо довжину рядка, якщо довжина дорівнює 0 повертаємо наступне значення
//         return '';   -----    повертаємо пустий рядок якщо довжина рядка = 0
//     }
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();   --- робимо першу букву велику всі інші маленькі та поєднуємо
// }
// Як це працює:
//     charAt(0) повертає перший символ рядка.
//     toUpperCase() перетворює його на велику літеру.
//     slice(1) отримує частину рядка, починаючи з другого символу.
//     toLowerCase() робить решту рядка маленькими літерами.
//     Додаємо ці частини разом через +.
//     capitalizeFirstLetter("hello") // "Hello"
// capitalizeFirstLetter("WORLD") // "World"
// capitalizeFirstLetter("javaScript") // "Javascript"

// Задача 3: Перевірка URL
// Напиши функцію isValidUrl(url), яка:
//     Перевіряє, чи рядок url починається з "http://" або "https://".
//     Повертає true або false.
// function isValidUrl(url) {
//     return url.startsWidth("htpp://") || url.startsWidth("https://");
// }
//     isValidUrl("http://example.com") // true
// isValidUrl("https://example.com") // true
// isValidUrl("ftp://example.com") // false
// isValidUrl("example.com") // false

// Задача 4: Пошук підрядка
// Напиши функцію findSubstring(string, substring), яка:
//     Приймає два параметри: рядок і підрядок.
//     Повертає true, якщо підрядок є в рядку, інакше false.
// function findSubstring(string, substring) {
//     return string.includes(substring);
// }
//     findSubstring("JavaScript is awesome", "is") // true
// findSubstring("Hello, world!", "bye") // false

// Задача 5: Обрізання рядка
// Напиши функцію truncateString(string, length), яка:
//     Приймає рядок і максимальну довжину length.
//     Якщо довжина рядка перевищує length, обрізає рядок до цієї довжини і додає три крапки(...).
//     function truncateString(string, length) {
//         if (string.length <= length) {
//             return string;
//         }
//         return string.slice(0, length) + "...";
// }
//     Перевіряється, чи довжина рядка string менша або дорівнює length:
//     Якщо так, рядок повертається без змін.
// Якщо рядок довший за length, він обрізається методом slice(0, length).
// До обрізаного рядка додаються три крапки (...), щоб вказати, що рядок обрізаний.
//     truncateString("Hello, world!", 5) // "Hello..."
// truncateString("JavaScript", 10) // "JavaScript"
// Пояснення:
//     Метод slice(0, length) повертає частину рядка, починаючи з індексу 0 і до індексу length (не включаючи length).
//     Додаючи "...", ми позначаємо, що рядок був обрізаний.
// Це рішення є оптимальним і простим для даної задачі.

// Задача 7: Видалення зайвих пробілів
// Напиши функцію removeExtraSpaces(string), яка:
//    Приймає рядок.
//     Видаляє всі зайві пробіли між словами та з початку і кінця рядка.
//     function removeExtraSpaces(string) {
//         return string.trim();
// }
//     Функція приймає рядок string.
// Викликає метод trim() для видалення зайвих пробілів на початку і в кінці рядка.
// Повертає оброблений рядок.
// removeExtraSpaces("   Hello    world   ") // "Hello world"
// removeExtraSpaces("  JavaScript   is   fun  ") // "JavaScript is fun"

// Задача 8: Перевірка закінчення рядка
// Напиши функцію endsWithSubstring(string, substring), яка:
// Перевіряє, чи рядок закінчується певним підрядком.
//     function endsWithSubstring(string, substring) {
//         return string.endsWith(substring);
//     }
// endsWithSubstring("hello.js", ".js") // true
// endsWithSubstring("index.html", ".css") // false
