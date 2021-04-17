import { LinkedList } from "../../src";

const list: LinkedList = new LinkedList();
describe("Some test module for your tool.", () => {
  it("Should linkedList work", () => {
    list.insertFirst("cat");
    list.insertLast("pig");
    list.insertAt(1, "dog");

    expect(list.length).toBe(3);
    expect(list.toArray().reduce((prev, cur) => (prev += cur))).toBe(
      "catdogpig"
    );

    list.removeAt(1);
    list.removeFirst();
    expect(list.toArray().reduce((prev, cur) => (prev += cur))).toBe("pig");
    list.insertLast("tiger");
    list.insertLast("bird");
    list.insertLast("man");
    expect(list.toArray().includes("man")).toBeTruthy();
    list.removeEach((node) => node.getValue() === "man");
    expect(list.toArray().includes("man")).toBeFalsy();

    const l = list.filter((node) => node.getValue().length > 4);
    console.log("==>", { l: l.toArray() });
    expect(l.isEmpty()).toBeFalsy();
    l.clear();
    expect(l.isEmpty()).toBeTruthy();
  });
});
