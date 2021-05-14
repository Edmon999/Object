//Write function that will zip arrays into object
const zipObject = (arr1, arr2) => {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== undefined) {
      obj[arr[i]] = arr2[i];
    } else {
      obj[arr[i]] = null;
    }
  }
  return obj;
};
