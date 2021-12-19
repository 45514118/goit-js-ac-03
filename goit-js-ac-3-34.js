// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени.
// Возвращает строку "Deleting book <имя книги>", где < имя книги > это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое.
// Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров oldName и newName соотвественно.

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};
