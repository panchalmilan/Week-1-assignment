/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  isValidIndex(idx) {
    return 0 <= idx && idx < this.todoList.length;
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    if (!this.isValidIndex(indexOfTodo)) return;
    this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (!this.isValidIndex(index)) return;
    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (!this.isValidIndex(indexOfTodo)) return null;
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
  }
}

const todo = new Todo();

todo.add('todo1');
todo.add('todo2');
todo.add('todo3');
todo.add('todo4');
todo.remove(1);
console.log(todo.getAll());
todo.update(1, 'todonew');
console.log(todo.getAll());

module.exports = Todo;
