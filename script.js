var resultOfInput = document.getElementById("result")
function display(number){
    resultOfInput.value += number
}


function calculate(){
    var finalNumber = resultOfInput.value;
    var finalResultNumber = eval(finalNumber);
    resultOfInput.value = finalResultNumber
}
function clrs(){
    resultOfInput.value= "";
}
function dlt(){
    resultOfInput.value= resultOfInput.value.slice(0,-1);
}