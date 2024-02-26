// @ts-check

const bubbleSort = (items) => {
  const tempArr = [...items]; //  клонирование массива
  for (let limit = tempArr.length - 1; limit > 0; limit -= 1) {
    for (let i = 0; i < limit; i += 1) {
      if (tempArr[i] > tempArr[i + 1]) {
        const temporary = tempArr[i];
        tempArr[i] = tempArr[i + 1];
        tempArr[i + 1] = temporary;
      }
    }
  }
  return tempArr;
};
export default bubbleSort;
