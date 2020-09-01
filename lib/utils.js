
export function randomItemArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if(item === not) {
		return randomItemArray(arr, not);
	}
	return item;
}