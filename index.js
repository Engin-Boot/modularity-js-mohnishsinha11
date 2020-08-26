//const expect = require('chai').expect;
const MajorColors=require("./majorColors.js");
const MinorColors=require("./minorColors.js");
var GetColorFromPairNumber=require("./getColorFromPairNumber.js");
var GetPairNumberFromColors=require("./getPairNumberFromColor.js");
var unitTestModule=require("./unitTest.js");

function ToString()
{
    let majorIndex = 0;
    let minorIndex = 0;
    var referenceManual="";
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++)
    {
        for(minorIndex=0;minorIndex<MinorColors.length;minorIndex++)
        {
            const pairNumber = GetPairNumberFromColors(MajorColors[majorIndex], MinorColors[minorIndex]);
            referenceManual= referenceManual + pairNumber + " = " +MajorColors[majorIndex] +" "+MinorColors[minorIndex]+"\n";        
        }
    }
    console.log(referenceManual);
    return referenceManual;
}
console.log("color coder");
unitTestModule.testNumberToPair(4, "white", "brown");
unitTestModule.testNumberToPair(25, "violet", "slate");
unitTestModule.testColorToNumber("black", "brown", 14);
unitTestModule.testColorToNumber("yellow", "green", 18);
ToString();
