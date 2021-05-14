const reverseObjectEntries = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
};
// reverseObjectEntries([
//     ["a", 1],
//     ["b", 2],
//     ])
