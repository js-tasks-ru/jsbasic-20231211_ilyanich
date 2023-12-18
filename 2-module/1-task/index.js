function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if (!isFinite(salaries[key])) continue;
    sum += salaries[key];
  }

  if (sum == 0) {
    return 0;
  } else {
    return sum;
  }
}
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};
console.log(sumSalary(salaries));
