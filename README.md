# test-javascript

test-javascript

======= Модуль 3. Масиви і функції =======

======= Масиви =======
[] - літерал масиву. (const fruits = ["apple", "plum", "pear", "orange"];)
const firstElement = fruits[0]; - обрати один із масивів 0 -це 1, 1 це 2 і т.д.
const lastElement = fruits[fruits.length-1]; - обрати останній елемент масиву із групи.
fruits[0] = "cocount" - перевизначити один із масиву звернувшись за індексом
return fruits.length; - повертає довжину масиву (к-ть єелементів масиву, а не знаків.)

======== Методи масиву ========

======== Метод join() ========
Метод дозволяє об'єднати елементи масиву в рядок

Приклад:
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing' - все разом
console.log(words.join(" ")); // 'JavaScript is amazing' - через пробіл
console.log(words.join("-")); // 'JavaScript-is-amazing' - через дефіс

======== Метод split() ========
Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником.

Приклад:
const name = "Mango";
const letters = name.split(""); - порожній рядок (без пробілу), розділяє рядок по буквам
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" "); - рядок з пробілом, розділяє елемент рядка на два окремих слова по пробілу
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-"); - рядок з тире, розділяє елементи рядка по тире
console.log(slugParts); // ["amazing", "french", "recipes"]

======== Метод slice() ========
Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.

Приклади використання методу slice():
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

========= Метод concat() =========
Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

Приклад:
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

======== Метод indexOf() ========
Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.

Приклад:
const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

========= Метод push() =========
Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.

Приклад використання методу push():
const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

======== Ітерація по масиву ========
Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.

У прикладі нижче масив planets містить назви планет, і цикл for використовується для виведення кожного елемента в консоль.

const planets = ["Earth", "Mars", "Venus"];
for (let i = 0; i < planets.length; i += 1) {
console.log(planets[i]);
}
Початкове значення лічильника i встановлюється як 0 і цикл продовжується, поки i менше за довжину масиву planets.length
На кожній ітерації циклу використовується planets[i] для доступу до елементів масиву за їх індексом i
Значення лічильника i з кожною ітерацією збільшується на 1 (вираз i += 1)
Умова i < planets.length буде повертати true для значень лічильника 0, 1 і 2. Коли i досягне значення 3, умова стане false і цикл зупиниться

======== Метод includes() ========
Метод масиву includes() використовується для перевірки наявності певного елемента в масиві. Він повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

Приклад використання методу includes():

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

Метод includes() можна поєднувати з розгалуженнями для перевірки умов. Наприклад, виконати різний код залежно від наявності значення в масиві.

const fruits = ["apple", "banana", "orange"];
if (fruits.includes("banana")) {
console.log("The array has an element banana");
} else {
console.log("Array does not contain banana element");
}
Код прикладу перевіряє наявність елемента "banana" в масиві fruits і виводить відповідне повідомлення залежно від результату перевірки.

======== Цикл for...of =========
Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.

Синтаксис циклу for...of виглядає так:

for (const element of array) {
// тіло циклу
}

Де:
element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
array — це вихідний масив, який ми хочемо перебрати.

Приклад використання циклу for...of для масиву:

const planets = ["Earth", "Mars", "Venus"];
for (const planet of planets) {
console.log(planet);
}

======== Функції (частина 2) ========

======== Псевдомасив arguments ========
Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments. Коли ти викликаєш функцію з аргументами, arguments автоматично створюється всередині цієї функції і заповнюється переданими значеннями аргументів.

Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:

    у неї є деякі властивості масивів, наприклад length;
    у неї є можливість звернутися до елемента за індексом;
    у неї немає методів для роботи з масивом;
    її можна перебирати за допомогою циклів.

Розгляньмо приклад використання arguments у функції, яка повертає результат множення будь-якої кількості аргументів.

function multiply() {
let total = 1;
for (const arg of arguments) {
total \*= arg;
}
return total;
}
console.log(multiply(1, 2, 3)); // 6
console.log(multiply(1, 2, 3, 4)); // 24
console.log(multiply(1, 2, 3, 4, 5)); // 120

Якщо під час роботи з arguments потрібно використовувати методи масиву, тоді псевдомасив необхідно перетворити на масив, використовуючи метод Array.from(), який створить масив із псевдомасиву.

function foo() {
// У змінній args буде повноцінний масив з усіх аргументів
const args = Array.from(arguments);
return args.join("-");
}
foo(1, 2, 3); // Поверне "1-2-3"
