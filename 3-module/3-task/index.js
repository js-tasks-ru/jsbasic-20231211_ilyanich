// function camelize(str) {
//   array = str.split("");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "-") {
//       array[i + 1] = array[i + 1].toUpperCase();
//       delete array[i];
//     }
//   }
//   return array.join("");
// }

function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      return index == 0 ? word : word[0].toUpperCase() + word.slice([1]);
    })
    .join("");
}

