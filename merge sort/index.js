// first create the function and sort the arrays as follows:

function merge(left, right) {
  let sortedArr = [];
  // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array,
  // combining the three arrays
  return [...sortedArr, ...left, ...right];

  console.log(merge([3, 4, 7], [2, 5]));
}

// need a function that splits an array into 1 size
function mergeSort(arr) {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half);
  // the first half of the array

  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}
