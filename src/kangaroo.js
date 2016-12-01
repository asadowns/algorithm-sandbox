/* eslint-disable */
const kangaroo = (function() {
  return  {
    calculatePosition,
    comparePosition,
    counter: 0,
    returnResult: returnResult,
    status: '',
    reason: ''
  };
  /* eslint-enable */

  
  function calculatePosition(start, velocity) {
    return start + velocity;
  }

  function returnResult(string) {
    console.log(string); //eslint-disable-line no-console
    kangaroo.status = string;
  }

  function comparePosition(item) {
     kangaroo.counter = kangaroo.counter + 1;
    const isRunAway = (item.x1 > item.x2 && item.v1 > item.v2) || (item.x2 > item.x1 && item.v2 > item.v1);
    if (item.x1 === item.x2) {
      returnResult("YES");
    } else if (isRunAway) {
      returnResult("NO");
      kangaroo.reason = "run away";
    } else if (kangaroo.counter > 10e3) {
      returnResult("NO");
      kangaroo.reason = "over limit";
    } else {
      item.x1 = calculatePosition(item.x1, item.v1);
      item.x2 = calculatePosition(item.x2, item.v2);
      comparePosition(item);
    }
  }


}());
/* eslint-disable */
function main() {
  var x1_temp = readLine().split(' ');
  var x1 = parseInt(x1_temp[0]);
  var v1 = parseInt(x1_temp[1]);
  var x2 = parseInt(x1_temp[2]);
  var v2 = parseInt(x1_temp[3]);
  var item = {
    x1: x1,
    x2: x2,
    v1: v1,
    v2: v2
  };
  kangaroo.comparePosition(item);
}
