// @ts-check

const selectionSort = (items) => {
  const tempArr = [...items];
  for (let i = 0; i < tempArr.length - 1; i += 1) {
    let indexMin = i;
    for (let j = i + 1; j < tempArr.length; j += 1) {
      if (tempArr[j] < tempArr[indexMin]) {
        indexMin = j;
      }
    }
    const temporary = tempArr[i];
    tempArr[i] = tempArr[indexMin];
    tempArr[indexMin] = temporary;
  }
  return tempArr;
};
export default selectionSort;
