function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('tool-error-border');
	var allErrorMessage = document.getElementsByClassName('tool-error-message');
	var i;
    // remove border
    for(i = (allErrorBorder.length) - 1; i>=0; i--)//beacuse every letter in error message contains bottom border that's why we have to use error to remove all the borders
    {
        allErrorBorder[i].classList.remove("tool-error-border");//here we have to remove error borders from class list because if we just do allErrorBorder[i].remove() will remove previous class as well as tool-error-border class also.
    }
    // remove error message
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }	  
}

function _cmnShowErrorMessageBottomOfTheInputField(fieldID,errorMessage){
    var InputField = document.getElementById(fieldID);
    InputField.classList.add("tool-error-border");//add border
    InputField.focus();//focus error field

    var errorMessageElement = document.createElement("p");//create a p tag for error message
    errorMessageElement.innerHTML = errorMessage;//set the error message in p tag
    errorMessageElement.classList.add("tool-error-message");//add the error message style class
    InputField.parentNode.insertBefore(errorMessageElement,InputField.nextSibling);//set the error message under the error field.
}

function _cmnHideElement(elementId)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != 'none'){
        document.getElementById(elementId).style.display = 'none';
    }
}

function _cmnShowElement(elementId,displayName)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != displayName){
        document.getElementById(elementId).style.display = displayName;
    }
}