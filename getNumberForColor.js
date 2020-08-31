function getNumberForColor(color,colorType) { //colorType could be major or minor
    let colorIndex=0;
    for(colorIndex = 0; colorIndex < colorType.length; colorIndex++) {
        if(colorType[colorIndex] == color) {
            break;
        }
    }
    return colorIndex;
}
module.exports=getNumberForColor;