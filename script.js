const output = document.querySelector("div.output")

const operators = ["+", "-", "*", "/"]
function add(num1,num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

let numberOne = ""
let numberTwo = ""
let operator = ""

function operate(num1, num2, operation){
    switch (operation){
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            if (num2 === 0){
                return "Undefined"
            } else {
                return divide(num1, num2).toFixed(2)
            }
    }
}

function updateScreen(){
    output.innerText = `${numberOne} ${operator} ${numberTwo}`
}

function clearScreen(){
    operator = ""
    numberTwo = ""
    numberOne = ""
    updateScreen()
}

function backspace(){
    if (numberTwo !== "") {
        numberTwo = numberTwo.slice(0, -1)
    } else if (operator !== "") {
        operator = operator.slice(0, -1)
    } else {
        numberOne = numberOne.slice(0,-1)
    }
    updateScreen()
}

const buttons = document.querySelectorAll("button")

const clickEvent = (event) => {
    if (event.target.innerText === '='){
        let result = operate(parseInt(numberOne), parseInt(numberTwo), operator)
        clearScreen()
        numberOne = result
        updateScreen()
    } else if (event.target.innerText === '<='){
        backspace()
    } else if (operators.includes(event.target.innerText) && operator === ""){
        operator = event.target.innerText
        updateScreen(operator)
    } else if (operators.includes(event.target.innerText) && operator !== ""){
        let result = operate(parseInt(numberOne), parseInt(numberTwo), operator)
        clearScreen()
        numberOne = result
        operator = event.target.innerText
        updateScreen()
    } else if (event.target.innerText === 'C') {
        clearScreen()
    } else if (event.target.innerText === '<=') {
        backspace()
    } else if (operator === "") {
        numberOne += event.target.innerText
        updateScreen()
    } else if (operator !== "") {
        numberTwo += event.target.innerText
        updateScreen()
    } 
    // console.log(`${event.target.innerText} button clicked!`)
}

buttons.forEach((button) => {
    button.addEventListener('click', clickEvent)
})