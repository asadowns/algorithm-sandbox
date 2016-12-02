"use strict";
/* global betweenTwoSets */
describe("describes the between two sets problem", () => {
  const a1 = [2, 4];
  const b1 = [16, 32, 48, 96];

  it("should be defined", () => {
    expect(betweenTwoSets).toBeDefined();
  });

  it("gets the right properties for the set", () => {
    const expectProps = {
      lowerBound: 4,
      upperBound: 16,
      increment: 2
    };
    betweenTwoSets.getRangeBounds(a1, b1);
    expect(betweenTwoSets.getSetProps).toEqual(expectProps);
  });

  it("increments candidate values when under upper bound", () => {
    betweenTwoSets.getRangeBounds(a1, b1);
    const response = betweenTwoSets.incrementCandidates(betweenTwoSets.getSetProps.lowerBound, a1, b1);
    expect(response).toBe(6);
  });

  it("returns the result if at or over limit", () => {
    betweenTwoSets.getRangeBounds(a1, b1);
    const response = betweenTwoSets.incrementCandidates(betweenTwoSets.getSetProps.upperbound);
    expect(response).toBeFalsy();
  });

  it("returns the result if at or over limit", () => {
    betweenTwoSets.getRangeBounds(a1, b1);
    const response = betweenTwoSets.incrementCandidates(betweenTwoSets.getSetProps.upperbound);
    expect(response).toBeFalsy();
  });

  it("returns the result if at or over limit", () => {
    betweenTwoSets.getRangeBounds(a1, b1);
    const response = betweenTwoSets.checkCandidate(betweenTwoSets.getSetProps.lowerBound, a1, b1);
    expect(response).toBeTruthy();
    expect(betweenTwoSets.getOutput).toContain(betweenTwoSets.getSetProps.lowerBound);
  });

  it("returns an array with the correct items", () => {
    const response = betweenTwoSets.init(a1, b1);
    expect(response).toEqual([4, 8, 16]);
  });

});
