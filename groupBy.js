// Write function that will group by some rule
const groupBy = (arr, func) => {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (!res[func(arr[i])]) {
      res[func(arr[i])] = [];
    }
    res[func(arr[i])].push(arr[i]);
  }
  return res;
};
