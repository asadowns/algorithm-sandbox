"use strict";
const hourglass = (function() {

  let highScore = null;

  const input = [ [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 9, 2, -4, -4, 0 ],
    [ 0, 0, 0, -2, 0, 0 ],
    [ 0, 0, -1, -2, -4, 0 ] ];
  
  const targetArray = [[0, 2], [1, 2], [0, 2]];

  const source = {
    array: input,
    rowLength: source[0].length,
    colLength: source.length
  };

  const target = {
    array: targetArray,
  };

  let targetsInSourceTotals = [];

  const originCursor = {
    rowMax: source.rowLength - target.rowLength,
    colMax: source.colLength - target.colLength,
    type: "origin"
  };

  let originPosition = [0, 0];

  const targetCursor = {
    rowMax: target.rowLength - target.rowLength,
    colMax: target.colLength - target.colLength,
    type: "target"
  };

  let targetPosition = [0, 0];



  function moveCursor(cursor, position, sum){
    let value = input[position[0]][position[1]];
    sum = sum + value;
    if (position[0] < rowLength) {
      position[0] = position[0] + 1;
    } 
    else if (position[1] < colLength) {
      position[1] = position.col + 1;
    }
    else if (cursor.type==="target"){
      targetsInSourceTotal.push(sum);
      sum = 0;
    }
    else {
      console.log(cursor.type);
      highScore = Math.max(...targetsInSourceTotal);
      console.log(highScore);
    }

  };
  /*  return {
    addShape,
    readRow,
    checkPosition,
    moveCursor
  };*/
  /*

  function checkPosition(position, shape) {
    let x = position.x;
    let y = position.y;

  }

  function addShape(input, shape) {

  }

  function readRow(row) {
    row.reduce( (prev, curr) => prev + curr );

  }

  function readShapesInRow() {
    if (rowPosition, , y, )
  }

  function readline() {

  }

*/


})();

