"use strict";
/* global SherlockPairs */
describe("", () => {

  const input1 = "2\n3\n1 2 3\n3\n1 1 2";
  const input2 = "1\n1\n8";
  let service = new SherlockPairs(input1);

  beforeEach(() => {
    service = new SherlockPairs(input1);
  });

  it("should exist", () => {
    expect(service).toBeTruthy();
  });

  it("should extract test cases", () => {
    const cleaned = service.cleanInput();
    expect(cleaned).toEqual([[1, 2, 3], [1, 1, 2]]);
  });

  it("should handle one length Ns", () => {
    const service2 = new SherlockPairs(input2);
    expect(service2.cleanInput()).toEqual([[8]]);
  });

  it("should reduce each test case to the number of items matching indexes", () => {
    expect(service.examineCases()).toEqual([0,2]);
  });

  it("should return a string answer", () => {
    expect(service.answer).toBe("0\n2");
  });

});