
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];


const merged = mergeArrays(a, b.concat(c));
console.log(merged);

/*
 * Expected output:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
