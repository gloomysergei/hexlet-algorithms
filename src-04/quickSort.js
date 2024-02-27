/* eslint-disable no-param-reassign */
// @ts-check

const partition = (items, left, right, pivot) => {
  const temp = [...items];

  while (true) {
    while (temp[left] < pivot) {
      left += 1;
    }

    while (temp[right] > pivot) {
      right -= 1;
    }

    if (left >= right) {
      return right + 1;
    }

    const temporary = temp[left];
    temp[left] = temp[right];
    temp[right] = temporary;

    left += 1;
    right -= 1;
    return temp;
  }
};
export default partition;
