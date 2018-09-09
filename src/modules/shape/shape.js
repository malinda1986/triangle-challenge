
const _ = require('lodash');
const {getType} = require('./triangle/triangle');
const shapeTriangle = 'TRIANGLE';

module.exports = (data) => {
    const {type} = data;
    if(type === shapeTriangle) {
        try{
            const typeName = getType(data.line1, data.line2, data.line3)
            return { shapeName: typeName, data };
        } catch(e){
            return { message: e.message };
        }
    } else {
        return { 'error': `Sorry, Type ${type} is not implemented!`, code: 400 };
    }
};
