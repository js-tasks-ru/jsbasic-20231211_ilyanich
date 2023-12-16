function ucFirst(str) {
  if (str == "") {
    console.log(1);
    return str;
  } else {
    console.log(2);
    return str[0].toUpperCase() + str.slice(1);
  }
}
console.log(ucFirst(""));
