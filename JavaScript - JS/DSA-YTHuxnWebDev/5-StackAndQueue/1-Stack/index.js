// Stack: LIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  // Push:
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return this;
    }
  }

  //   Pop:
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  //   Top:
  top() {
    if (this.length === 0) {
      return undefined;
    }
    return this.first;
  }
}

let theStack = new Stack(0);
theStack.push(3);
theStack.push(4);
theStack.push(8);
theStack.push(7);
theStack.pop();

console.log(theStack);
