/* ДЗ 2 - работа с массивами и объектами */

/* Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
  let mas = [];
  for (let i = 0; i < array.length; i++) {
    mas[i] = fn(array[i], i, array);
  }
}

/* Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let mas = [];
  for (let i = 0; i < array.length; i++) {
    mas.push(fn(array[i], i, array));
  }
  return mas;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  if (initial === undefined) {
    initial = array[0];
  }

  for (let i = 0; i < array.length; i++)
    initial = fn(initial, array[i], i, array);

  return initial;
}

/* Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let mas = [];
  for (let item in obj) {
    mas.push(item.toUpperCase());
  }
  return mas;
}

/*Задание 5:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
  let mas = [];

  if (to > array.length) to = array.length;
  if (from < 0 && from + to < 0) from = 0;
  else if (from < 0) {
    to = array.length;
    from += to;
  }

  if (to < 0) to += array.length;

  for (var i = from; i < to; i++) {
    mas.push(array[i]);
  }

  return mas;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и
 возводить это значение в квадрат
 */

function createProxy(obj) {
  return new Proxy(obj, {
    get(obj, prop, receiver) {
      if (prop in obj) {
        return Reflect.get(obj, prop, receiver) * Reflect.get(obj, prop, receiver);
      }
      return 0;
    }
  });
}

export {forEach, map, reduce, upperProps, slice, createProxy};
