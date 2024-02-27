/* eslint-disable quotes */
// @ts-check

import bubbleSort from "./src-04/bubbleSort.js";
import selectionSort from "./src-04/selectionSort.js";
import partition from "./src-04/quickSort.js";

const arr = [2, 3, 4, 3, 1, 2, 4, 5, 1, 2];
console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(partition(arr));
