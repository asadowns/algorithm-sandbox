class SherlockPairs {
  constructor(input) {
    this.input = input;
  }

  cleanInput() {
    const arr = this.input.split("\n");
    return arr.filter((inputRow, inputRowIndex) => inputRowIndex > 0 && inputRowIndex % 2 === 0)
      .map((testCase) => testCase.split(" ")
        .map(Number)
        .sort()
      );
  }

  examineCases() {
    return this.cleanInput()
      .map((value) => this.processCase(value)
      );
  }

  processCase(array) {
    const dictionaryOfCounts = array.reduce((value, count) =>
        Object.assign(value, {[count]: (value[count] || 0) + 1}), {});

    const duplicates = Object.keys(dictionaryOfCounts).filter((value) => dictionaryOfCounts[value] > 1);

    return duplicates.reduce((count, current) => count + (dictionaryOfCounts[current] * (dictionaryOfCounts[current] - 1)), 0);
  }

  get answer() {
    const results = this.examineCases();
    return results.join("\n");
  }

}

/*
const sherlockPairs = new SherlockPairs("2\n3\n1 2 3\n3\n2 1 1 1");
console.log(sherlockPairs.examineCases());
*/

function processData(input) {
  const sherlockPairs = new SherlockPairs(input);
  console.log(sherlockPairs.answer);
}

