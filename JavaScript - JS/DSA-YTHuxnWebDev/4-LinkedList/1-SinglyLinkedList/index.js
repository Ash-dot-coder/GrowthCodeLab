class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //   Push:
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //   Pop:
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      //   console.log("**** temp", temp);
      prev = temp;
      temp = prev.next;
    }

    // console.log("*** prev", prev);
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //   Unshift:
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //   Shift:
  shift() {
    if (!this.head) {
      return undefined;
    }

    // 1. Point to the first node/element
    let temp = this.head;

    // 2. Move the head to the next node/element
    this.head = this.head.next;

    // 3. Remove first element
    temp.next = null;
    this.length--;

    // If we have one node in the list
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  //   GetFirst:
  getFirst() {
    return this.head;
  }

  // GetLast:
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      console.log("************ Node:", node);
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  //   Get:
  get(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  //   Set:
  set(index, value) {
    let temp = this.get(index);
    console.log("--------", temp);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  //   Insert:
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    // Uses the get method to find the node right before the desired position (index - 1).
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  //   Size:
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  //   Clear:
  clear() {
    this.head = null;
  }
}

let singlyL = new LinkedList(3);
singlyL.push(4);
singlyL.push(7);
singlyL.pop();
singlyL.unshift(9);
singlyL.shift();

// console.log(singlyL.get(1));
// console.log(singlyL.insert(1, 8));
console.log(singlyL);
