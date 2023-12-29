function getMinMax(str) {
  let arr = str
    .split(" ")
    .filter((element) => {
      return isFinite(element);
    })
    .map((element) => {
      return Number(element);
    })
    .sort((a, b) => a - b);
  console.log(arr);
  let result = {
    min: arr[0],
    max: arr[arr.length - 1],
  };
  return result;
}

