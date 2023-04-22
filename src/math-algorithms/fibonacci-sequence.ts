function fibonacci_sequences(num: number): number[] {
  const result: number[] = [0, 1];
  for (let i = 2; i < num; i++) {
    result[i] = result[result.length - 2] + result[result.length - 1];
  }
  return result;
}

console.log(fibonacci_sequences(3));
console.log(fibonacci_sequences(2));
console.log(fibonacci_sequences(4));
console.log(fibonacci_sequences(7));

// Big-O
// time-complexcity = linear
// space-complexcity = constant
