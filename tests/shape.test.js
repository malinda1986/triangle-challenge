const shape =  require('../src/modules/shape/shape');

describe('Shape function', () => {
    test('should retun 400 error code for if type is empty', () => {
      const expectedQueryObject = shape({});
    
      expect(expectedQueryObject).toEqual({ 'error': `Sorry, Type undefined is not implemented!`, code: 400 });
    });
    test('should retun 400 error code for unsupported shape', () => {
        const queryObj = {'type': 'Squar'};
        const expectedQueryObject = shape(queryObj);
        expect(expectedQueryObject).toEqual({ 'error': `Sorry, Type Squar is not implemented!`, code: 400 });
    });
    test('should retun triangle type if it pass invalid dimenstions', () => {
        const queryObj = {
            "line1" :1,
            "line2": 5,
            "line3": 2,
            "type": "TRIANGLE"
        };
        const expectedQueryObject = shape(queryObj);
        expect(expectedQueryObject).toEqual({
            "message": "Invalid dimenstions"
        });
    });
    test('should retun triangle type if it pass type as TRIANGLE', () => {
        const queryObj = {
            "line1" :1,
            "line2": 2,
            "line3": 2,
            "type": "TRIANGLE"
        };
        const expectedQueryObject = shape(queryObj);
        expect(expectedQueryObject).toEqual({
            "shapeName": "isosceles",
            "data": {
                "line1": 1,
                "line2": 2,
                "line3": 2,
                "type": "TRIANGLE"
            }
        });
    });
});