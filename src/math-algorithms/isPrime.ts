function isPrime(num: number): boolean {
  let result = true;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) result = false;
  }
  return result;
}

console.log(isPrime(11));
