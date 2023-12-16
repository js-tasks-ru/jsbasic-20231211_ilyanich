function truncate(str, maxlength) {
  let inTheEnd = "…";
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + inTheEnd;
  } else {
    return str;
  }
}
// console.log(truncate("цроаи цоулаиуц аоцушаит цуаотлцЭ", 5));
