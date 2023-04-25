function RecursivFactorial(n: number): number {
  if (n === 0) return 1;

  return n * RecursivFactorial(n - 1);
}

console.log(RecursivFactorial(4));
