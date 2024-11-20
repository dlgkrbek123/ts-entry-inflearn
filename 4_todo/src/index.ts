type ToDoItem = {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: ToDoItem[];

// api
function fetchTodoItems() {
  const todos: ToDoItem[] = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: ToDoItem) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: ToDoItem) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems() {
  addTodo({ id: 4, title: '엉준식', done: false });
  addTodo({ id: 5, title: '킹준식', done: false });
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
