// for (let i = 1; i < 5; i++) {
// 	console.log(`Conclusion - ${i}`);
// }
// let i = 1;
// while (i < 5) {
// 	console.log(`Conclusion - ${i}`)
// 	i++;
// }

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 5) {
		break;
	}
	console.log(arr[i]);
}

let i = 0;
while (arr[i] <= 5 && arr.length) {
	console.log(arr[i]);
	i++
}