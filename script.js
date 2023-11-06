
let firstNumber = 0;
let secondNumber = 0;
let counter = 0;
let operator = ' '; 
let operatorCheck = 0;
let bigNumberOne = []; 
let bigNumberTwo = [];


const display = document.querySelector("#displayPart");
// added firstNumber = add(a,b)/subtract(a,b) etc , so even if we add another number after
// the firstNumber in getInput function will act like the final result is the firstNumber
// and add the rest to it so we can go 22 - 5 then 17 + 2 , etc 

function add(a , b){
    firstNumber = a + b;
    return a + b;
}

function substract(a , b ){
    firstNumber = a - b;
    return a - b;
}

function multiply(a , b ){
    firstNumber = a * b;
    return a * b;
}
function divide(a , b ){
    firstNumber = a / b;
    return a / b ; 
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

        bigNumberOne.push(number); // we add into an array 
        firstNumber = (createNumber(bigNumberOne,firstNumber)); // we use this function to create a number out of that array

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
    updateDisplay(newOperator); // updating the display into the operator
    operatorCheck += 1;
    // too se wich function we should use

}

function resetValues(){
    
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

    // here we create the number out of that array
}

