"use strict";
const hourglass = (function() {

  const input = [[1, 1, 1, 0, 0, 0],
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

  const xlim = source.rowLength - target.rowLength;
  const ylim = source.colLength - target.colLength;
  const targetsInSourceTotals = [];

  return {
    addShape,
    checkPosition,
    getMaxShapeValue,
    output: null, //private
    origin: [0, 0],
    targetsInSourceTotals

  };
  
  function addShape(origin) {

    const shapeValue = shape.reduce((sum, pos) => {
      const xpos = origin[0] + pos[0];
      const ypos = origin[1] + pos[1];
      return sum + input[ypos][xpos];
    }, 0);

    targetsInSourceTotals.push(shapeValue);
    origin[0] = origin[0] + 1;
    //checkPosition(origin, shape, rowLim, colLim);
  }

  function getMaxShapeValue() {
    this.output = Math.max(...targetsInSourceTotals);
    console.log(this.output);
  }

  function checkPosition(origin) {
    if (origin[0] <= xlim) {
      addShape(origin);
    } else if (origin[1] <= ylim) {
      origin[0] = 0;
      origin[1] = origin[1] + 1;
      addShape(origin);
    } else {
      //getMaxShapeValue();
    }
  }

}());

