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

