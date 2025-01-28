// const age = 20;
// console.log(age);
// const username = "Mango";
// console.log(username);

// let username = "Mango";
// console.log(username);
// username = "Poly";
// console.log(username);

// const x = 8;
// const y = 5;
// console.log(x + y);   --- додавання

// const x = 8;
// const y = 5;
// console.log(x - y);    --- віднімання

// const x = 8;
// const y = 5;
// console.log(x * y);   --- множення

// const x = 8;
// const y = 5;
// console.log(x / y);   --- ділення

// const x = 8;
// const y = 5;
// console.log(x % y);   --- виводить відсоток

// const x = 8;
// const y = 5;
// console.log(x ** y); --- піднесення до степені

// Виводимо суму за 4 товари ціною в 3500 кожен
// const pricePerItem = 3500;   ---- на ціну
// const orderedQuantity = 4;   ---- на к-ть
// const totalPrice = pricePerItem * orderedQuantity;  ---- на суму
// console.log(pricePerItem * orderedQuantity);   ---- для виведення значення в консоль (браузер)

// Виводить суму за 6 товарів ціною 800 кожен та додає доставку 50, та повідомлення з загальною сумою
// const pricePerDroid = 800;     ----- ціна товару
// const orderedQuantity = 6;     ----- кількість товару в замовленні
// const deliveryFree = 50;     ----- ціна доставки
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFree;    -----   виводить загальну суму 800*6+50
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits`;    -----  виводить повідомлення з загальною сумою
// console.log(message);

// Виведення к-ті символів в рядку (виводить цифру яка відповідає к-ті символів)
// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`; ----виведе в консоль: Username Poly is 4(к-ть симвоів у слові) characters long

// Виведення кількості символів та виведення індекса рядка(символа з рядка)
// const courseTopic = "JavaScript essentials";   ----- значення.
// const courseTopicLength = courseTopic.length;   ----- виводить к-ть символів стрічки: 21.
// const firstElement = courseTopic[0];   ------   виводить індекс рядка (0 - це перша буква рядка): J.
// const lastElement = courseTopic[courseTopicLength -1];     -----   виводить індекс рядка (-1 це останнsq символ рядка): satisfies.

// Виводить (так) false якщо значення менше 18, або (ні)  true якщо значення більше = ніж 18
// const age = 16;
// const isAdult = age >= 18;
// console.log(isAdult);
// false(< та <=); true(> та >=).

// Порівняння рівності значень
// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// Слабка рівність - ==
// Сувора рівність - ===
// Слабка нерівність - !=
// Сувора нерівність - !==

// Перетворення рядків у числа
// const value = "24.5px";   ---   дробове число
// const numerical = parseFloat(value); ----перетворення дробового числа
// const value = "24";   ---   ціле число
// const numerical = parseInt(value);   ---- перетворення цілого числа

// Додавання дробових чисел
// const liter = 0.1 + 0.2; --- буде не точне значення 0.300000004
// const liter = (0.1 * 10 + 0.2 * 10) / 10; --- буде точне значення 0.3
// або
// const liter = (0.1 + 0.2).toFixed(1); --- буде точне значення 0.3 (.toFixed - вказує на фіксовану к-ть знаків після крапки, (1) - вказує яка саме к-ть знаків має бути)
// console.log(liter);

// Оголошення та виклик функції
// function sayHi() {    ----   призначення імені функції
//   console.log("Hello, this is my first function!")    ----   тіло функції
// }
// sayHi()    -----    виклик функції

// Оголошення функції додавання
// function add(a, b, c) {   ---- оголошення функції, в дужках наведені параметри
//   const result = a + b + c;   ----  формула яка вказує що робити
//   console.log(`Addition result equals ${result}`);     ----  тіло функції, повідомлення де викликаний result який виводить значення формули
// }
// add(15, 27, 10);    ---- значення яке викликається функцією, в дужках аргументи які підставляються замість a, b та с
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {    ----   оголошення функції
//   return a + b + c;     ----  повернення функції
// }
// console.log(add(15, 27, 10));   ----   дані для виклику функції
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//    return `You picked ${name}, price per item is ${price} credits`;   ----   Повертаємо шаблонний рядок з використанням параметрів
// }
// console.log(makeMessage("Radar", 6150));      -----   Виклики функції для перевірки
// console.log(makeMessage("Scanner", 3500));
// console.log(makeMessage("Reactor", 8000));
// console.log(makeMessage("Engine", 4070));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {   ---   оголошення функції (к-ть, ціна)
//   return orderedQuantity * pricePerItem;        -------    повернення функції яка виконала множення
// }
// calculateTotalPrice(5, 100);       ------    виклик функції
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);
