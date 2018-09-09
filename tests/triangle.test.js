const {sort, getType} = require('../src/modules/shape/triangle/triangle');

describe('sort function', () => {
  test('should retun empty array for empty params', () => {
    const expectedQueryObject = sort();
    expect(expectedQueryObject).toEqual([]);
  });
  test('should retun empty array if it pass only one param', () => {
    const expectedQueryObject = sort(1);
    expect(expectedQueryObject).toEqual([]);
  });
  test('should retun sorted array - 1', () => {
    const expectedQueryObject = sort(1, 3, 4);
    expect(expectedQueryObject).toEqual([4,3,1]);
  });
  test('should retun sorted array - 2', () => {
    const expectedQueryObject = sort(3,2,1);
    expect(expectedQueryObject).toEqual([3,2,1]);
  });
  test('should retun sorted array - 3', () => {
    const expectedQueryObject = sort(10,4,21);
    expect(expectedQueryObject).toEqual([21,10,4]);
  });

});

describe('getType function', () => {
    test('should retun equilateral as trinagle type', () => {
      const expectedQueryObject = getType(2,2,2);
      expect(expectedQueryObject).toEqual('equilateral');
    });
    test('should retun isosceles as trinagle type', () => {
        const expectedQueryObject = getType(2,2,1);
        expect(expectedQueryObject).toEqual('isosceles');
    });
    test('should retun scalene as trinagle type', () => {
        const expectedQueryObject = getType(5,2,3);
        expect(expectedQueryObject).toEqual('scalene');
    });
});