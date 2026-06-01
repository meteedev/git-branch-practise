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

function remove(id) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    const removed = todos.splice(index, 1)[0];
    console.log(`🗑️  ลบ: "${removed.title}"`);
  }
}

module.exports = { add, complete, list, remove };
