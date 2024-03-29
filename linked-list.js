/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("Error List is Empty");
    }
    let removedValue;
    if (this.head === this.tail) {
      removedValue = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      removedValue = this.tail.val;
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return removedValue;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("Error List is Empty");
    }
    const removedValue = this.head.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return removedValue;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }
  idx = (3)[(1, 5, 8, 13, 16)];
  current = 1;

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds");
    }

    if (idx === 0) {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    const newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;

    if (!newNode.next) {
      this.tail = newNode;
    }

    this.length++;
    // Can I use previous functions?? Like Unshift and Shift
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }

    let removedNode;
    if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = current.next.next;
      if (!current.next) {
        this.tail = current;
      }
    }

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      throw new Error("Cannot calculate average of an empty list");
    }

    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
