export function calculateWallpapers(roomLength1, roomLength2, roomHeight, rollWidth, rollLength) {

    let perimeter = roomLength1*2 + roomLength2*2;
    let numderOfLanes = perimeter / rollWidth;
    numderOfLanes = Math.ceil(numderOfLanes);//все равно не работает
    let numberOfLinesInOneRoll = rollLength / roomHeight;
    numberOfLinesInOneRoll = Math.floor(numberOfLinesInOneRoll);
    let result = numderOfLanes / numberOfLinesInOneRoll;
    result = Math.ceil(result);
    return result;
}


console.log(calculateWallpapers(5,6,2.85,1.06,10));