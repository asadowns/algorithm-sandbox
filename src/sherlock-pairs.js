class SherlockPairs {
  constructor(input) {
    this.input = input;
  }

  cleanInput() {
    const arr = this.input.split("\n");
    return arr.filter((inputRow, inputRowIndex) => inputRowIndex > 0 && inputRowIndex % 2 === 0)
      .map((testCase) => testCase.split(" ")
        .map(Number));
  }

  examineCases() {
    return this.cleanInput()
      .map((testCase) => testCase
        .reduce((sumMatchingIndexes, curr, index, caseArray) => sumMatchingIndexes + caseArray
          .filter((val) => val === curr)
          .length - 1
        , 0)
      );
  }

  spliceAndIncrement(array) {
    const countUniques = [...new Set(array)].length;
    console.log(countUniques);
    let duplicates = 0;
    for (let index = array.length - 1; index >= 0; index--) {
      let indexOfValue = array.lastIndexOf(array[index]);
      if (indexOfValue > -1) {
        array.splice(indexOfValue, 1);
        duplicates++;
      }
    }
    console.log(duplicates - countUniques);


  }

  get answer() {
    const results = this.examineCases();
    return results.join("\n");
  }

}

const sherlockPairs = new SherlockPairs("2\n3\n1 2 3\n3\n1 1 2");
console.log(sherlockPairs.spliceAndIncrement([1, 1, 2, 2]));
/*
function processData("2\n3\n1 2 3\n3\n1 1 2") {
  const sherlockPairs = new SherlockPairs(input);
  console.log(sherlockPairs.answer);

}
*/
