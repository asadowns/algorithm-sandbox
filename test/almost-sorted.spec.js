describe("almost sorted problem", () => {
    const vm = AlmostSorted; //eslint-disable-line no-undef
    const input1 = [4, 2];
    const input2 = [1, 5, 4, 3, 2, 6];
    const input3 = [3, 1, 2];

  it("should process a specific string input format into a number and an array", () => {

    const swapped = vm.swapElementsArray(input1, 0, 1);
    expect(swapped).toEqual([2, 4]);
  });

  it("should return both items in a two item array if out of order", () => {
    const input = [4, 2];
    const ooo1 = vm.getOutOfOrder(input);
    expect(ooo1).toEqual([4, 2]);
  });

  it("should return the entire sequence of out of order items if they are in a row", () => {
    const ooo2 = vm.getOutOfOrder(input2);
    expect(ooo2).toEqual([5, 4, 3, 2]);
  });

  it("should return two items with the sequence 3 1 2", () => {
    const ooo3 = vm.getOutOfOrder(input3);
    expect(ooo3).toEqual([3, 1]);
  });

  it("should reverse out of order items", () => {
    const ooo = [5, 4, 3, 2];
    const reversed = vm.reverseElementsArray(input2, ooo);
    expect(reversed).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should test if a swapped string is sorted and return a string with the indexes if it is", () => {
    const input = [4, 2];
    const ooo = [4, 2];
    const sorted = [2, 4];
    const isSwappable = vm.testSwap(input, ooo, sorted);
    expect(isSwappable).toBe(" 1 2");
  });

  it("should test if a swapped string is sorted and return false if it is not", () => {
    const ooo = [3, 1];
    const sorted = [1, 2, 3];
    const notSwappable = vm.testSwap(input3, ooo, sorted);
    expect(notSwappable).toBe(false);
  });

  it("should test if a reversed string is sorted and return a string with the indexes if it is", () => {
    const ooo = [5, 4, 3, 2];
    const sorted = [1, 2, 3, 4, 5, 6];
    const isReversable = vm.testReverse(input2, ooo, sorted);
    expect(isReversable).toBe(" 5 2");
  });

  it("should test if a reversed string is sorted and return a string with the indexes if it is", () => {
    const ooo = [3, 1];
    const sorted = [1, 2, 3];
    const isReversable = vm.testReverse(input3, ooo, sorted);
    expect(isReversable).toBe(false);
  });
});