
test('array is [1, 2, 3, 4]', () => {
  const cloneDeep = require('../src/cloneDeep').default;
  const array = [1, 2, 3, 4];
  const clonedArray = cloneDeep(array);

  clonedArray[0] = 100;

  expect(array).toEqual([1, 2, 3, 4]);
});