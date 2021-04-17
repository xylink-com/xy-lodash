# LinkedList

LinkedList 单向链表结构。

## 何时使用

- 链表结构存储值。
- 适合增、删操作比较频繁的场景。

## 代码案例

```ts
import { LinkedList } from "toolkit";
const list: LinkedList = new LinkedList();
list.insertFirst("cat");
list.insertLast("pig");
list.insertAt(1, "dog");
```

更多代码案例请参考：[LinkedList 测试文件](../../../_test_/linkedList/linkedList.test.ts)

## API

### 实例方法

| API         | 参数                                               | 返回值     | 描述                     |
| ----------- | -------------------------------------------------- | ---------- | ------------------------ |
| insertFirst | value                                              | node       | 向链首插入值             |
| insertLast  | value, startNode?                                  | node       | 向链尾插入值             |
| insertAt    | position, value                                    | node       | 向传入位置插入值         |
| removeFirst |                                                    | node       | 向链首删除值             |
| removeLast  |                                                    | node       | 向链尾删除值             |
| removeEach  | cb: (node: nodeType, position: number) => boolean) | number     | 以 callback 的方式删除   |
| removeAt    | position                                           | node       | 向传入位置删除值         |
| forEach     | cb: (node: nodeType, index: number) => void        | void       | 循环链表                 |
| find        | cb: (node: nodeType, index: number) => boolean     | node       | 查找节点                 |
| filter      | cb: (node: nodeType, index: number) => boolean     | LinkedList | 以 callback 方式过滤节点 |
| toArray     |                                                    | Array      | 转化为 value 数组        |
| isEmpty     |                                                    | boolean    | 判断链表是否为空         |
| clear       |                                                    | void       | 清空链表                 |

### 静态属性

| 参数   | 描述     |
| ------ | -------- |
| head   | 头结点   |
| length | 链表长度 |

## TODO

- 类 array 方法补全： length, concat, every, findIndex, includes, indexOf, join, keys, lastIndexOf, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, split, unshift, valueOf 等。