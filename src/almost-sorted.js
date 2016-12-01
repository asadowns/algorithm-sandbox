/*function processData(input) {
  const vm = AlmostSorted;
  input = input.split('\n');
  n = input[0];
  array = input[1].split(' ').map(Number);
  sorted = array.slice().sort();
  isAlreadySorted = (array == sorted);
  outOfOrder = vm.getOutOfOrder(array);
  const isSwappable = vm.testSwap(array, outOfOrder, sorted);
  const isReversable = vm.testReverse(array, outOfOrder, sorted);
  vm.printResponse(isSwappable, isReversable);
}*/
/* eslint-disable */
const AlmostSorted = (function(){

  const service = {
    printResponse: printResponse,
    getOutOfOrder: getOutOfOrder,
    testSwap: testSwap,
    testReverse: testReverse,
    reverseElementsArray: reverseElementsArray,
    swapElementsArray: swapElementsArray
  };

  return service;
  /* eslint-enable */
  function printResponse(isSwappable, isReversable) {

    if (isAlreadySorted) { //eslint-disable-line
      console.log("yes");
    } else if (isSwappable) {
      console.log("yes");
      console.log(`swap${isSwappable}`);
    } else if (isReversable) {
      console.log("yes");
      console.log(`reverse${isReversable}`);
    } else if (!isSwappable && !isReversable) {
      console.log("no");
    }
  }

  function getOutOfOrder(array) {
    return array.filter((el, ind, arr) => el > arr[ind + 1] || (ind > 0 && el < arr[ind - 1]) || (el === arr.slice(-1)[0] && el < arr[ind - 1]));
  }


  function testSwap(array, outOfOrder, sorted) {
    const i1 = array.indexOf(outOfOrder[0]);
    const i2 = array.indexOf(outOfOrder[1]);
    const swapped = this.swapElementsArray(array, i1, i2);
    const output = ` ${i1 + 1} ${i2 + 1}`;
    return (swapped.toString() === sorted.toString()) ? output : false;
  }

  function testReverse(array, outOfOrder, sorted) {
    const reversed = this.reverseElementsArray(array, outOfOrder);
    const firstooo = reversed.indexOf(outOfOrder[0]);
    const lastooo = reversed.indexOf(outOfOrder.slice(-1)[0]) + 1;
    const output = ` ${firstooo + 1} ${lastooo}`;
    return reversed.toString() === sorted.toString() ? output : false;
  }

  function reverseElementsArray(array, outOfOrder) {
    const reversed = array;
    const firstooo = reversed.indexOf(outOfOrder[0]);
    const lastooo = reversed.indexOf(outOfOrder.slice(-1)[0]) + 1;
    const recombinant = reversed.slice(firstooo, lastooo).reverse();
    reversed.splice(firstooo, lastooo - firstooo, ...recombinant);
    return reversed;
  }

  function swapElementsArray(arr, indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
  }

})();