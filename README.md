# hexlet-algorithms

## [Внешний ресурс с примерами реализации алгоритмов](https://github.com/trekhleb/javascript-algorithms)

## src-04 Алгоритмы сортировки

### 1. Пузырьковая сортировка `bubbleSort.js`

- Включение проверки типов в коде - поместить в начале кода `// @ts-check`
  [Проверка типов в JavaScript](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript])

- Замечание - импорт не работает без явного указания типа импортируемого файла `import bubbleSort from ./src/bubbleSort.js`

  ![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### 2. Сортировка выбором `selectionSort.js`

Этот алгоритм сначала проводит операции сравнения и находит наименьший элемент, а только потом помещает его в начало массива. После первого прохода алгоритм исключает первый элемент из рассмотрения и ищет минимальный элемент в оставшейся части массива, а затем помещаем его на второе место
