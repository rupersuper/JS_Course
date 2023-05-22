// for (let i = 1; i < 5; i++) {
// 	console.log(`Cycl 1 - ${i}`);
// 	for(let j = 1; j < 5; j++) {
// 		console.log(`Cycle 2 - ${j}`)
// 	}
// }

const tasks = [[1, 'Tasks 1'], [2, 'Tasks 2']];

for (let i = 0; i < tasks.length; i++) {
	for(let j = 0; j < tasks[i].length; j++) {
		console.log(tasks[i][j]);
	}
}