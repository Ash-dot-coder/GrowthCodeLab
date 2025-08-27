function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const myArr = [8, 3, 9, 2, 6, 1, 1, 7, 0];
const myArr2 = [7, 0, 1, 2, 42, 1, 6, 2, 3, 8];
const res = bubbleSort(myArr);
const res2 = bubbleSort(myArr2);
console.log(`Before sorting-ONE: ${myArr}`);
console.log(`BubbleSort: ${res}`);

console.log(`Before sorting-TWO: ${myArr2}`);
console.table(res2);
