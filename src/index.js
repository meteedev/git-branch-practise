const todoService = require('./todoService');

// ทดสอบการทำงาน
todoService.add('เรียน Git branching');
todoService.add('ทำ Pull Request แรก');
todoService.add('ฝึก merge conflict');

console.log('=== Todo List ===');
todoService.list().forEach((t, i) => {
  console.log(`${i + 1}. [${t.done ? 'x' : ' '}] ${t.title}`);
});

// call service
todoService.complete(1);

console.log('\n=== หลัง complete ===');
todoService.list().forEach((t, i) => {
  console.log(`${i + 1}. [${t.done ? 'x' : ' '}] ${t.title}`);
});

