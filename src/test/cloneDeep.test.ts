
test('', () => {
  const cloneDeep = require('../cloneDeep');
  const array = [1, 2, 3, 4];
  const clonedArray = cloneDeep(array);

  array[0] = 100;

  expect(clonedArray).toEqual([1, 2, 3, 4]);
});