"use strict";
/* global SherlockPairs, testsherlock2, answerSherlock2 */
describe("", () => {

  const input1 = "2\n3\n1 2 3\n3\n1 1 2";
  const input2 = "1\n1\n8";
  const input3 = testsherlock2;
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
    expect(service.examineCases()).toEqual([0, 2]);
  });

  it("should return a string answer", () => {
    expect(service.answer).toBe("0\n2");
  });

  it("handles the extract test cases from a giant input", () => {
/*
    const service3 = new SherlockPairs(input3);
    const cleaned = service3.cleanInput();
    console.log(cleaned[1]);
    const case0 = service3.processCase(cleaned[0]);
    console.log(case0);
    const case1 = service3.processCase(cleaned[1]);
    console.log(case1);
    const case2 = service3.processCase(cleaned[2]);
    console.log(case2);

    const case3= service3.processCase(cleaned[3]);
    console.log(case3);
*/
  });

  it("deals with a huge test case", () => {
    const service3 = new SherlockPairs(input3);
    console.log(service3.answer);
    expect(service3.answer).toBe(answersherlock2);
  });


});