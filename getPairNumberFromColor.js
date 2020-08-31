const MajorColors=require("./majorColors.js");
const MinorColors=require("./minorColors.js");
const getNumberForColorReference=require("./getNumberForColor");

function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = getNumberForColorReference(majorColor,MajorColors);
    let minorIndex = getNumberForColorReference(minorColor,MinorColors);
    return majorIndex * MinorColors.length + minorIndex + 1;
}
module.exports=GetPairNumberFromColors;