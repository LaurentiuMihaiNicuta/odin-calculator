
let firstNumber = 0;
let secondNumber = 0;
let counter = 0;
let operator = ' '; 
let operatorCheck = 0;

let bigNumberOne = [];
let bigNumberTwo = [];

const display = document.querySelector("#displayPart");

function add(a , b){
    return a + b;
}

function substract(a , b ){
    return a - b;
}

function multiply(a , b ){
    return a * b;
}
function divide(a , b ){
     return a / b;
}

/*function getInput(number){
    if(counter == 0){
        firstNumber = number;
        counter += 1;
    }else {
        secondNumber = number;
    }
    


    updateDisplay(number);
}
 old function 
*/

function getInput(number){
    

    if(operatorCheck == 0){
        firstNumber = 0;

        bigNumberOne.push(number);
        firstNumber = (createNumber(bigNumberOne,firstNumber));

        updateDisplay(firstNumber);
        console.log(firstNumber);

    }
    if( operatorCheck == 1 ){
        secondNumber = 0;

        bigNumberTwo.push(number);
        secondNumber = (createNumber(bigNumberTwo,secondNumber));

        updateDisplay(secondNumber);
        console.log(secondNumber);
    }
}

function updateDisplay(number){
    display.textContent = " ";
    display.textContent = number;
}

function equals(){
    if (operator == '+'){
        updateDisplay(add(firstNumber,secondNumber));
    }
    if (operator == "-"){
        updateDisplay(substract(firstNumber,secondNumber))
    }
    if (operator == "x"){
        updateDisplay(multiply(firstNumber,secondNumber))
    }
    if (operator == "/"){
        updateDisplay(divide(firstNumber,secondNumber))
    }

    resetValues();

}

function changeOperator(newOperator){
    operator = newOperator;
    updateDisplay(newOperator);
    operatorCheck = 1;
    

}

function resetValues(){
    firstNumber = 0;
    secondNumber = 0;
    bigNumberOne = [];
    bigNumberTwo = [];
    counter = 0;
    operator = ' '; 
    operatorCheck = 0;
}

function createNumber(array,initialNumber){
    for ( let i = 0 ; i < array.length ; i++){
        initialNumber = initialNumber * 10 + array[i];
    }
    return initialNumber;
}