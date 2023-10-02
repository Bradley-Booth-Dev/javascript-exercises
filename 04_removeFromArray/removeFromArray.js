function removeFromArray(arr, ...argsToRemove) {
  const resultArray = [];
  for (let item of arr) {
    if (!argsToRemove.includes(item)) {
      resultArray.push(item);
    }
  }
  return resultArray;
}

// Do not edit below this line
module.exports = removeFromArray;
