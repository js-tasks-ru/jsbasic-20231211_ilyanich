function factorial(n) {
  let fuct = 1;
  for (let i = 1; i <= n; i++) {
    fuct *= i;
  }
  return fuct;
}
console.log(factorial(4));
