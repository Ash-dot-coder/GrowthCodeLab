class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // ---------Push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //  ---------Get
  get(index) {
    return this.data[index];
  }

  //   ---------Pop
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // ---------Shift
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element  (which now contains the original second element)
    delete this.data[this.length - 1];
    this.length--;

    // Return the first item that was removed from the array
    return firstItem;
  }

  // ---------Delete
  delete(index) {
    // Store the item to be removed
    const item = this.data[index];

    // Shift elements after the target element (excluding the last one)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element (which now hold the element to be removed)
    delete this.data[this.length - 1];

    // Decrement length
    this.length--;

    // Return the removed item
    return item;
  }
}

// Start Data Execution
const myNewArray = new MyArray();

// ---------push
myNewArray.push("Hey-One");
myNewArray.push("Hey-Two");
myNewArray.push("Hey-Three");

// ---------get
// console.log(myNewArray.get(1));

// ---------pop
// myNewArray.pop();

// ---------shift
// myNewArray.shift();

// ---------delete
myNewArray.delete(1);
console.log(myNewArray);
