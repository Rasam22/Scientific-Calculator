const numbers = document.querySelectorAll(".number")
console.log(numbers)

// numbers.forEach((number) => {
//     console.log(number)
// })

// numbers.forEach((number) => {
//     number.addEventListener("click", () => {
//         console.log("number is pressed")
//     })
// })

// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         console.log(event.target.value)
//     })
// })
let check = 0;
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
let val = '0'
let c = 0

const inputNumber = (number) => {
    if (currentInput === '0')
        currentInput = number
    else {
        currentInput += number
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (check === 1) {
            currentInput = '0';
            check = 0;
            c = 0;
            val = '0';
        }
        if (c == 1 && event.target.value != ')') {
            val += event.target.value;
        }
        inputNumber(event.target.value);
        //updateScreen(currentInput);
        calculatorScreen.value = currentInput;
    })
})


const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator
    currentInput = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})


const calculate = () => {
    let result = 0
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break
        case 'sin':
            result = Math.sin((parseFloat(val) * Math.PI) / 180);
            break
        case 'cos':
            result = Math.cos((parseFloat(val) * Math.PI) / 180);
            break
        case 'tan':
            result = Math.tan((parseFloat(val) * Math.PI) / 180);
            break
        case '!':
            size = val.length;
            n = parseInt(val);
            f = 1;
            for (i = 2; i <= n; i++)
                f = f * i;
            result = f;
            break
        case '^':
            result = Math.pow(parseInt(prevInput), parseInt(currentInput));
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentInput)
    check = 1;
    c = 0;
})

const clearBtn = document.querySelector(".all-clear")

// clearBtn.addEventListener('click', () => {
//     console.log('AC button is pressed')
// })

const clearAll = () => {
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
    val = '0'
    c = 0
    check = 1;
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentInput)
})

const backspace = document.querySelector(".backspace")

backspace.addEventListener('click', () => {
    //console.log('AC button is pressed')
    size = calculatorScreen.value.length;
    if (size == 1)
        calculatorScreen.value = '0';
    else
        calculatorScreen.value = calculatorScreen.value.substring(0, size - 1);

    currentInput = calculatorScreen.value;
    if (c == 1) {
        val = val.substring(0, val.length - 1);
    }
})

const scop = document.querySelectorAll(".sc-op")

scop.forEach((scop) => {
    scop.addEventListener("click", (event) => {
        var func = event.target.value;
        if (check === 1) {
            currentInput = '0';
            check = 0;
            c = 0;
            val = '0';
        }
        if (func == 'sin') {
            c = 1;
            currentInput = 'sin(';
            calculatorScreen.value = 'sin(';
            calculationOperator = 'sin';
        } else if (func == 'cos') {
            c = 1;
            currentInput = 'cos(';
            calculatorScreen.value = 'cos(';
            calculationOperator = 'cos';
        } else if (func == 'tan') {
            c = 1;
            currentInput = 'tan(';
            calculatorScreen.value = 'tan(';
            calculationOperator = 'tan';
        } else if (func == '!') {

            val = currentInput;
            currentInput += event.target.value;
            calculatorScreen.value = currentInput;
            calculationOperator = event.target.value;

        }
    })
})