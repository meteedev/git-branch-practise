const todos = [];

function add(title) {
  if (!title || title.trim() === '') {
    throw new Error('title ห้ามว่าง');
  }
  todos.push({ id: todos.length + 1, title: title.trim(), done: false });
  console.log(`✅ เพิ่ม: "${title.trim()}"`);
}

function complete(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.done = true;
    console.log(`☑️  done: "${todo.title}"`);
  }
}

function list() {
  return todos;
}

module.exports = { add, complete, list };
