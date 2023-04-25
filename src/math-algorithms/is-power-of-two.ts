//------- Big-0=O(n) ---------/
// function isPowerOfTwo(num: number): boolean {
//   if (num === 1) return true;
//   let power = 2;
//   for (let i = 1; i < num; i++) {
//     if (num === power) return true;
//     power *= 2;
//   }

//   return false;
// }

// //------- Big-0=O(logn) ---------/
// function isPowerOfTwo(num: number): boolean {
//   if (num < 1) return false;
//   while (num > 1) {
//     if (num % 2 !== 0) return false;
//     num = num / 2;
//   }
//   return true;
// }

/*------- Big-0=O(1) ---------*/
function isPowerOfTwo(num: number): boolean {
  if (num < 1) return false;
  return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(7));
