// ===============================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// =========================================================
// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
//  Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару,
//     price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям(властивість name)
//  в масиві products і повертала його ціну(властивість price).Якщо продукт з такою назвою не
// знайдений, функція повинна повертати null.
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// ========================================================
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
//     ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості
//     з таким ім'ям з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості
//     з таким ім'ям, функція повинна повернути порожній масив.
//     Оголошена функція getAllPropValues(propName)
//     Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
//     Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
//     Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
//     Виклик getAllPropValues("category") повертає []
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const result = [];
//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

// =============================================================
// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару,
// price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару
// з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок
// "Product <productName> not found!" , де <productName> — це ім'я товару.
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Radar"));

// =============================================================
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення
// інвентарю.Програма має додавати, видаляти, шукати та оновлювати зілля.
// Оголоси об'єкт atTheOldToad з наступними властивостями:
//     potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
//     getPotions() — метод, який повертає рядок "List of all available potions"
//     addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// ===========================================================
// Об'єкт atTheOldToad має наступні властивості:
//     potions — масив рядків, з назвами зілль
//     getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// ==========================================================
// Об'єкт atTheOldToad має наступні властивості:
//     potions — масив рядків, з назвами зілль
//     getPotions() — метод, який повертає значення властивості potions
//     addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву
//  у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// =====================================================================
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.
// Об'єкт atTheOldToad має наступні властивості:
//     potions — масив рядків, з назвами зілль
//     getPotions() — метод, який повертає значення властивості potions
//     addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в
//      кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості
// potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// ============================================================
// Об'єкт atTheOldToad має наступні властивості:
//     potions — масив об'єктів зілль
//     getPotions() — метод, який повертає значення властивості potions
//     updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля
// з oldName на newName в масиві зілля у властивості potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName){
//         potion.name = newName;
//       }
//     }
//   },
// };

// -------------------------------------------------------
// Задача 1: Підрахунок кількості властивостей
// Напиши функцію countProperties(obj), яка приймає об'єкт obj і повертає кількість його
//  властивостей.
// function countProperties(obj) {
//   return Object.keys(obj).length;
// }
//  Приклад роботи:
// console.log(countProperties({ name: "Alice", age: 25, city: "Kyiv" })); // 3
// console.log(countProperties({})); // 0
// console.log(countProperties({ a: 1, b: 2, c: 3, d: 4 })); // 4

// ----------------------------------------------------------
// Задача 2: Повернення імен студентів із високими балами
// У тебе є масив об'єктів, що представляють студентів. Напиши функцію
// getHighScorers(students, minScore), яка повертає масив імен студентів,
// у яких бал вище minScore.
//  Приклад роботи:
// const students = [
//   { name: "Ivan", score: 85 },
//   { name: "Oksana", score: 92 },
//   { name: "Petro", score: 78 },
//   { name: "Maria", score: 90 },
// ];
// function getHighScorers(students, minScore) {
//   const result = [];
//   for (const student of students) {
//     if (student.score > minScore) {
//       result.push(student.name);
//     }
//   }
//   return result;
// }
// console.log(getHighScorers(students, 80)); // ["Ivan", "Oksana", "Maria"]
// console.log(getHighScorers(students, 95)); // []
// console.log(getHighScorers(students, 78)); // ["Ivan", "Oksana", "Maria", "Petro"]

// --------------------------------------------------
// Задача 3: Додавання нових товарів у магазин
// Створи функцію addProduct(products, newProduct), яка приймає масив об'єктів products
// (товари в магазині) та новий об'єкт newProduct.
// Якщо товар із таким ім’ям уже є, функція має оновити його кількість,
// а якщо ні – додати його до масиву.
//  Приклад роботи:
// const products = [
//   { name: "Laptop", price: 1500, quantity: 3 },
//   { name: "Phone", price: 800, quantity: 5 },
// ];
// addProduct(products, { name: "Tablet", price: 600, quantity: 2 });
// console.log(products);
// [
//   { name: "Laptop", price: 1500, quantity: 3 },
//   { name: "Phone", price: 800, quantity: 5 },
//   { name: "Tablet", price: 600, quantity: 2 },
// ];
// addProduct(products, { name: "Laptop", price: 1500, quantity: 2 });
// console.log(products);
// [
//   { name: "Laptop", price: 1500, quantity: 5 }, // Кількість збільшилась!
//   { name: "Phone", price: 800, quantity: 5 },
//   { name: "Tablet", price: 600, quantity: 2 },
// ];
// function addProduct(products, newProduct) {
//   for (const product of products) {
//     if (product.name === newProduct.name) {
//       product.quantity += newProduct.quantity;
//       return products;
//     }
//   }
//   products.push(newProduct);
//   return products;
// }

// ---------------------------------------------------
// Задача 4: Фільтрація користувачів за віком
// Напиши функцію filterByAge(users, minAge), яка повертає масив користувачів,
// яким не менше ніж minAge.
// Приклад роботи:
// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 18 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 17 },
// ];
// console.log(filterByAge(users, 18));
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 18 },
//   { name: "Charlie", age: 25 },
// ];
// console.log(filterByAge(users, 21));
//  [
//   { name: "Alice", age: 30 },
//    { name: "Charlie", age: 25 }
//  ]
// function filterByAge(users, minAge) {
//     const musUser = [];
//   for (const user of users) {
//     if (user.age >= minAge) {
//         musUser.push(user);
//     }
//     }
//     return musUser;
// }

// -----------------------------------------------------
// Задача 5: Підрахунок загальної вартості замовлення
// Є масив об'єктів cart, що представляє кошик покупця. Напиши функцію calculateTotal(cart),
// яка поверне загальну вартість замовлення.
//  Приклад роботи:
// const cart = [
//   { name: "Apple", price: 10, quantity: 3 },
//   { name: "Banana", price: 5, quantity: 2 },
//   { name: "Orange", price: 8, quantity: 4 },
// ];
// function calculateTotal(cart) {
//   let totalSum = 0;
//   for (const carts of cart) {
//     totalSum += carts.price * carts.quantity;
//   }
//   return totalSum;
// }
// ✅ Оптимізована версія (з reduce)
// Той самий результат можна отримати коротше та ефективніше:
// function calculateTotal(cart) {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }
// 📌 reduce() проходить по всьому масиву і підсумовує значення – зменшує кількість коду,
//     роблячи його більш читабельним.
//  console.log(calculateTotal(cart)); // (10*3) + (5*2) + (8*4) = 74

// -----------------------------------------------------------------
// 1. Підрахунок кількості товарів
// Створи функцію countTotalQuantity(products), яка приймає масив об'єктів products і
// повертає загальну кількість всіх товарів.
// Приклад:
// const products = [
//   { name: "Laptop", quantity: 3 },
//   { name: "Phone", quantity: 5 },
//   { name: "Tablet", quantity: 2 },
// ];
// function countTotalQuantity(products) {
//   let sum = 0;
//   for (const product of products) {
//     sum += product.quantity;
//   }
//   return sum;
// }
// console.log(countTotalQuantity(products)); // 10

// -------------------------------------------------------------------
// 2. Пошук найдорожчого товару
// Створи функцію findMostExpensiveProduct(products), яка повертає об'єкт найдорожчого товару.
// Приклад:
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
// ];
// function findMostExpensiveProduct(products) {
//   let newProduct = products[0];
//   for (const product of products) {
//     if (product.price > newProduct.price) {
//       newProduct = product;
//     }
//   }
//   return newProduct;
// }
// console.log(findMostExpensiveProduct(products)); // { name: "Laptop", price: 1500 }

// --------------------------------------------------------
// 3. Підрахунок кількості користувачів за ролями
// Напиши функцію countUsersByRole(users), яка приймає масив користувачів та повертає об'єкт,
//  де ключі – це ролі, а значення – кількість користувачів з цією роллю.
// Приклад:
// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "user" },
//   { name: "David", role: "moderator" },
// ];
// function countUsersByRole(users) {
//   let result = {};
//   for (const user of users) {
//     if (result[user.role]) {
//       result[user.role] += 1;
//     } else {
//       result[user.role] = 1;
//     }
//   }
//   return result;
// }
// console.log(countUsersByRole(users));
//  { admin: 1, user: 2, moderator: 1 }

// ----------------------------------------------------------
// 4. Оновлення ціни товару
// Створи функцію updateProductPrice(products, productName, newPrice), яка змінює ціну товару
//  з вказаною назвою.
// Приклад:
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
// ];
// updateProductPrice(products, "Phone", 900);
// console.log(products);
// [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 900 }, // Ціна змінилася!
//   { name: "Tablet", price: 600 },
// ];
// function updateProductPrice(products, productName, newPrice) {
//   for (const product of products) {
//     if (product.name === productName) {
//       product.price = newPrice;
//       return;
//     }
//   }
// }

// ---------------------------------------------------------
// 5. Пошук товарів у ціновому діапазоні
// Напиши функцію filterProductsByPrice(products, minPrice, maxPrice), яка повертає товари,
// ціна яких у заданому діапазоні.
// Приклад:
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
//   { name: "Monitor", price: 300 },
// ];
// function filterProductsByPrice(products, minPrice, maxPrice) {
//   let newProduct = [];
//   for (const product of products) {
//     if (product.price >= minPrice && product.price <= maxPrice) {
//       newProduct.push(product);
//     }
//   }
//   return newProduct;
// }
// console.log(filterProductsByPrice(products, 500, 1000));
//  [{ name: "Phone", price: 800 }, { name: "Tablet", price: 600 }]
