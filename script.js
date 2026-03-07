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
            return divide(num1, num2)
    }
}

function updateScreen(){
    output.innerText = `${numberOne} ${operator} ${numberTwo}`
}



const buttons = document.querySelectorAll("button")

const clickEvent = (event) => {
    if (event.target.innerText === '='){
        let result = operate(parseInt(numberOne), parseInt(numberTwo), operator)
        numberOne = result
        operator = ""
        numberTwo = ""
        updateScreen
    }
    else if (operators.includes(event.target.innerText)){
        operator = event.target.innerText
    }else if (operator === "") {
        numberOne += event.target.innerText
    } else if (operator !== "") {
        numberTwo += event.target.innerText
    }
    updateScreen()
    console.log(`${event.target.innerText} button clicked!`)
}

buttons.forEach((button) => {
    button.addEventListener('click', clickEvent)
})