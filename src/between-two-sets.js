const betweenTwoSets = (function() {
  const props = {};
  let output = [];
  return {
    getOutput: output,
    getRangeBounds,
    getSetProps: props,
    incrementCandidates,
    checkCandidate,
    init
  };

  function checkCandidate(int, lowerArray, upperArray) {
    let lowTest = lowerArray.every(factor => int % factor === 0);
    let highTest = upperArray.every(factor => factor % int === 0);
    if (lowTest && highTest) {
      output.push(int);
    }
    incrementCandidates(int, lowerArray, upperArray);
    return lowTest && highTest;
  }

  function incrementCandidates(int, lowerArray, upperArray) {
    if (int < props.upperBound) {
      let candidate = int + props.increment;
      checkCandidate(candidate, lowerArray, upperArray);
      return candidate;
    }
    else {
      //console.log(output.length);
      return false;
    }
  }

  function getRangeBounds(lowerArray, upperArray) {
    props.lowerBound = Math.max(...lowerArray);
    props.upperBound = Math.min(...upperArray);
    if (lowerArray.indexOf(0) > -1) {
      lowerArray.splice(lowerArray.indexOf(0), 1);
    }
    props.increment = Math.min(...lowerArray);
    return props;
  }

  function init(lowerArray, upperArray) {
    output = [];
    getRangeBounds(lowerArray, upperArray);
    checkCandidate(props.lowerBound, lowerArray, upperArray);
    return output;
  }

})();

/*
function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  b = readLine().split(' ');
  b = b.map(Number);
  betweenTwoSets.init(a, b);
}
*/



