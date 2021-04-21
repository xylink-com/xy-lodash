import { valueType } from "./linkedList.type";

class LinkedListNode {
  private value: valueType = undefined;
  private next: null | LinkedListNode;

  constructor(value, next) {
    this.value = value;
    this.setNext(next);
  }
  public setValue(value: valueType) {
    this.value = value;
    return this;
  }
  public getValue(): valueType {
    return this.value;
  }

  public setNext(next) {
    if (next && !(next instanceof LinkedListNode)) {
      throw new Error("Next should be instance of LinkedListNode or null");
    }
    this.next = next || null;
    return this;
  }
  public getNext() {
    return this.next;
  }
  public hasNext() {
    return this.next instanceof LinkedListNode;
  }
}

export default LinkedListNode;
