function factorial(num: number): number {
  let fac = 1;
  for (let i = 2; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

console.log(factorial(3));
