// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}
