# Teacher

# Lesson 5
-------------------------

Ссылка на презентацию https://www.mediafire.com/file/5lm9ldys1gkw7dx/lesson_5.pptx/file

Создаем папку Lesson5

# Домашнее задание 1: 

```
/**
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * @param {number} arraySize - размер массива
  * @param {?} value - значение для массива
  * @returns {Array}
*/

const fill = (arraySize, value) => {
 throw new Error('Напишите здесь свое решение');
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
```

# Домашнее задание 2: 

```
/**
  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
const compact = (array) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
```

# Домашнее задание 3:

```
/**
  * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}
*/
const fromPairs = (array) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
```