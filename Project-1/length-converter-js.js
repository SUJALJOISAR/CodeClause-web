//create a function to validate form

function validateLengthConverter(fromLength){

    _cmnRemoveAllErrorMessage();

    if(fromLength <=0){
        // alert("Please enter the valid length");
        _cmnShowErrorMessageBottomOfTheInputField("fromLength","Please Enter the valid length")
        return false;
    }

    return true;
}

function ResetLengthConverter(){
    if(confirm("Are you sure want to reset?")){
        document.getElementById("fromLength").value = "";
        document.getElementById("outputLength").value = "";

        _cmnRemoveAllErrorMessage();

         //hide our result div
         _cmnHideElement("OutputResult");

         //show our basic div
         //_cmnShowElement(elementId,displayName)
         _cmnShowElement("OutputInfo","flex");
    }
}

function CalculateLength(){
    var fromLength =Number(document.getElementById("fromLength").value);

    if(validateLengthConverter(fromLength))
    {
        //start calculation

        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var fromLength =document.getElementById("fromLength").value;
        var outputLength = document.getElementById("outputLength");

        // if(fromUnit == "Millimeter"){
        //     if(toUnit == "Centimeter"){
        //         var ans = fromLength/10;
        //         alert(ans);
        //     }

        var ans = ConvertLength(fromLength,fromUnit,toUnit);
        // alert(ans);
        outputLength.value = ans;

        //hide our basic info div
        _cmnHideElement("OutputInfo");

        //show our result div
        //_cmnShowElement(elementId,displayName)
        _cmnShowElement("OutputResult","flex");

        //set result
        var resultTag=document.getElementById("lengthResult");
         //format the result
        resultTag.innerHTML= fromLength + ' ' + fromUnit + '=' + ans.toFixed(5) + ' ' + toUnit; 

        //now set the formula from our formula json file.
        showFormula(fromUnit,toUnit);
        }
    }


//see here fromLength means value 
//fromUnit means intial given value is in which unit
//toUnit means finally in which we have to convert in unit.

//create a function to convert length

function ConvertLength(fromLength,fromUnit,toUnit)
{
    //make our fromLength as Millimeter
    //make Millimeter to our targeted Unit
    fromLength = Number(fromLength);
    var inMillimeter = 0;
    var makeThisMillimeter = 0;
    var result;

    //means if we want to convert into Millimeter and if fromUnit is different then Millimeter then what should be multiplied with inMillimeter to make that unit converted to Millimeter.
    //first make the given unit to Millimeter
    switch(fromUnit){
        case "Millimeter":
            makeThisMillimeter = 1;
            break;
        case "Centimeter":
            makeThisMillimeter = 10;
            break;
        case "Decimeter":
            makeThisMillimeter = 100;
            break;
        case "Meter":
            makeThisMillimeter = 1000;
            break;
        case "Kilometer":
            makeThisMillimeter = 1000000;
            break;
        case "Foot":
            makeThisMillimeter = 304.8;
            break;
        case "Inch":
            makeThisMillimeter = 25.4;
            break;
        case "Mile":
            makeThisMillimeter = 1609344;
            break;
        case "Yard":
            makeThisMillimeter = 914.4;
            break;
    }
    inMillimeter = fromLength * makeThisMillimeter;

    //convert the millimeter value to targetd unit
    switch(toUnit){
        case "Millimeter":
            result = inMillimeter;
            break;
        case "Centimeter":
            result = inMillimeter/10;
            break;
        case "Decimeter":
            result = inMillimeter/100;
            break;
        case "Meter":
            result = inMillimeter/1000;
            break;
        case "Kilometer":
            result = inMillimeter/1000000;
            break;
        case "Foot":
            result = inMillimeter/304.8;
            break;
        case "Inch":
            result = inMillimeter/25.4;
            break;
        case "Mile":
            result = inMillimeter/1609344;
            break;
        case "yard":
            result = inMillimeter/914.4;
            break;
    }
    return result;
}

function showFormula(fromUnit,toUnit){
    objFormula = JSON.parse(formula);
    for(var i=0;i<objFormula.conversions.length;i++){
        if(
            objFormula.conversions[i].from.toLowerCase() == fromUnit.toLowerCase() && objFormula.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
        ){
            document.getElementById("lengthFormula").innerHTML = objFormula.conversions[i].formula;
        }
    }
}