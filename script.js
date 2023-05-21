const tasks = ['Tasks 1', 'Tasks 2', 'Tasks 3'];
console.log(tasks);

for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Tasks 2') {
		continue;
	}
	console.log(tasks[i]);
}

console.log('--------------------------')

for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Tasks 2') {
		break;
	}
	console.log(tasks[i]);
}