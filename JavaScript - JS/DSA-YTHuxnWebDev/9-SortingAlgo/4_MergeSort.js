function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  result.push(...left.slice(i));
  result.push(...right.slice(j));

  return result;
}

const unsortedArray = [38, 98, 23, 28, 88, 12, 0, 3, 2, 17];
console.log(`Before sort: ${unsortedArray}`);
const sortedArray = mergeSort(unsortedArray);
console.table(sortedArray);
