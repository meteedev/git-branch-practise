const todos = [];

function add(title) {
  todos.push({ id: todos.length + 1, title, done: false });
}

function complete(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = true;
}

function list() {
  return todos;
}

module.exports = { add, complete, list };
