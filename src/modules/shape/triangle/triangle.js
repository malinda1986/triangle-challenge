
const EQUILATERAL = 'equilateral';
const ISOSCELES = 'isosceles';
const SCALANE = 'scalene';

const sort = (side1, side2, side3) => {
    if(side1 && side2 && side3){
        const sides = [side1, side2, side3];
        const sortedSides = sides.sort((x,y) => y-x );
        return sortedSides;
    } else {
        return [];
    }
};

const getType = (side1, side2, side3) => {
    const sorted = sort(side1, side2, side3);
    if (sorted[0] <= (sorted[1] + sorted[2])){
        if (side1 === side2 && side2 === side3 && side3 === side1){
            return EQUILATERAL;
        } if (side1 === side2 || side2 === side3 || side3 === side1 ){
            return ISOSCELES;

        } if ((side1 !== side2) && (side2 !== side3)) {
            return SCALANE;
        }
    } else {
        throw new Error('Invalid dimenstions');
    }
};

module.exports = {
    sort,
    getType,
};
