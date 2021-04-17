import config from "./linkedList.config";
import LinkedListNode from "./linkedListNode";
import { valueType } from "./linkedList.type";

type nodeType = LinkedListNode | null;

class LinkedList {
  public head: nodeType;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert node at the beginning of list
  public insertFirst(value: valueType) {
    this.head = new LinkedListNode(value, this.head);
    this.length++;
    return this.head;
  }

  // insert node at last of list
  public insertLast(value: valueType, startNode?: nodeType) {
    if (this.isEmpty()) {
      return this.insertFirst(value);
    }
    if (startNode && !(startNode instanceof LinkedListNode))
      throw new Error("StartNode should be LinkedListNode type.");
    let tail = startNode || this.head;
    while (tail.hasNext()) {
      tail = tail.getNext();
    }
    tail.setNext(new LinkedListNode(value, null));
    this.length++;
    return tail.getNext();
  }

  // insert node at position
  public insertAt(position: number, value: valueType) {
    if (Number.isNaN(+position))
      throw new Error("Position type should be number.");
    if (position < 0 || position > this.length)
      throw new Error(`Position expects between 0 to ${this.length}`);
    if (position === 0) return this.insertFirst(value);
    let prev: nodeType = this.head;
    let currentPosition: number = 1;
    while (currentPosition < position) {
      currentPosition++;
      prev = prev.getNext();
    }
    prev.setNext(new LinkedListNode(value, prev.getNext()));
    this.length++;
    return prev.getNext();
  }

  // remove first node of list
  public removeFirst() {
    if (this.isEmpty()) return null;
    const removed: nodeType = this.head;
    this.head = this.head.getNext();
    this.length--;
    return removed.setNext(null);
  }

  // remove last node of list
  public removeLast() {
    if (this.isEmpty()) return null;
    let prev: nodeType = null;
    let removed: nodeType = this.head;
    while (removed.hasNext()) {
      prev = removed;
      removed = removed.getNext();
    }
    if (prev === null) return this.removeFirst();
    prev.setNext(null);
    this.length--;
    return removed;
  }

  // loop the list, remove node base on callback return.
  public removeEach(cb: (node: nodeType, position: number) => boolean): number {
    let currentPosition: number = 0;
    let removeCount: number = 0;
    let prev: nodeType = null;
    let current: nodeType = this.head;
    while (current !== null) {
      // delete node at this position
      if (cb(current, currentPosition)) {
        if (prev === null) {
          this.removeFirst();
          return 1;
        }
        prev.setNext(prev.getNext().getNext());
        removeCount++;
      } else {
        // if current is deleted, prev won't change
        prev = current;
      }
      current = current.getNext();
      currentPosition++;
    }
    return removeCount;
  }

  // remove node at position
  public removeAt(position: number) {
    if (Number.isNaN(+position))
      throw new Error("Position type should be number.");
    if (position < 0 || position > this.length)
      throw new Error(`Position expects between 0 to ${this.length}`);
    if (this.isEmpty()) return null;
    if (position === 0) return this.removeFirst();
    let currentPosition: number = 1;
    // prev pointer is before currentPosition
    let prev: nodeType = this.head;
    while (currentPosition < position) {
      currentPosition++;
      prev = prev.getNext();
    }
    const removed = prev.getNext();
    prev.setNext(removed.getNext());
    this.length--;
    return removed.setNext(null);
  }

  // loop this list for node and index
  public forEach(cb: (node: nodeType, index: number) => void) {
    let index: number = 0;
    let current: nodeType = this.head;
    while (current !== null) {
      cb(current, index);
      current = current.getNext();
      index++;
    }
  }

  // find node that satisfied condition
  public find(cb: (node: nodeType, index: number) => boolean): nodeType {
    this.forEach((node, index) => {
      if (cb(node, index)) return node;
    });
    return null;
  }

  // return new linkedList base on callback with nodes that satisfied conditions.
  public filter(cb: (node: nodeType, index: number) => boolean): LinkedList {
    const subList: LinkedList = new LinkedList();
    let last: nodeType = null;
    this.forEach((node, index) => {
      if (cb(node, index)) last = subList.insertLast(node.getValue(), last);
    });
    return subList;
  }

  public toArray(): valueType[] {
    let values: valueType[] = [];
    this.forEach((node) => {
      values.push(node.getValue());
    });
    return values;
  }

  public isEmpty(): boolean {
    return this.head === null;
  }
  public clear() {
    this.length = 0;
    this.head = null;
  }
}

export default LinkedList;
