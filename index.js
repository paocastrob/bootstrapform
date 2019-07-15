function hideAlert(){
    document.querySelector("#redBox").style.visibility="hidden"
}
function showAlert(){
    document.querySelector("#redBox").style.visibility="visible"
}
function submit(){
    let notEmptyArray = document.querySelectorAll(".notEmpty")
    let onlyNumbers = document.querySelectorAll(".numbers")
    let onlyWords = document.querySelectorAll(".words")
 //if its empty
    for (a=0; a<notEmptyArray.length; a++){
        if (notEmptyArray[a].value==""){
            showAlert();
        }
 //if its numbers
        else if (isNaN(onlyNumbers[a].value)){
            document.querySelector("#redBox").style.visibility="visible";
            document.querySelector("#redBox").innerHTML= "Make sure that card, cvc, amount and zip fields have a numeric value"
        }
//if its words
        else if (typeof onlyWords[a].value !== "string"){
            document.querySelector("#redBox").style.visibility="visible";
            document.querySelector("#redBox").innerHTML= "Make sure your last name, first name and City are letters"
        }

        else {
            hideAlert();
        }

    }
};
