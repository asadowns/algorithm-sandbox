"use strict";

describe("almost sorted problem", () => {
  const input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]];

  const shape = [[0, 0], [1, 0], [2, 0], [1, 1], [0, 2], [1, 2], [2, 2]];

  const source = {
    array: input,
    rowLength: input[0].length,
    colLength: input.length
  };

  const target = {
    array: shape,
    rowLength: 3,
    colLength: 3
  };

  const rowLim = source.rowLength - target.rowLength;
  const colLim = source.colLength - target.colLength;
  const targetsInSourceTotals = [];
  const origin = [0, 0];
  let output = null;

  it("should check if a valid shape can be constructed from the origin", () => {
    //hourglass.checkPosition(originPosition, shape, rowLim, colLim);
  });

  it("should calculate the value of the shape from a valid origin", () => {
    const testOrigin = [3, 3];
    hourglass.addShape(testOrigin);
    expect(hourglass.targetsInSourceTotals[0]).toBeDefined();
    expect(hourglass.targetsInSourceTotals[0]).toEqual(-14);
  });
  
  it("should try and move the origin to the start of the next row if the origin is invalid", () => {
    const testOrigin = [4, 0];
    spyOn(hourglass, "addShape");
    hourglass.checkPosition(origin, shape, rowLim, colLim);
  });

  it("should return the largest shape value if no more shapes can be constructed", () => {

  });

  it("", () => {

  });
  
});
