function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const unsortedArray = [8, 6, 9, 3, 4, 0, 12];
console.log(`Before Sorting: ${unsortedArray}`);
const sortedArray = insertionSort(unsortedArray);
console.table(sortedArray);
