import {printToDom} from '../helpers/util.js';
import {add, divide, multiply, subtract} from '../helpers/maths.js';


// object
const calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: '', //inner html is going to return a string, we want a space in between the paranthensis. 
};


const calculate = () => {
    let answer = 0;
    switch(calc.mathType){
        case 'multiply':
        answer = multiply(calc.firstNumber, calc.secondNumber);
            break;
        case 'divide':
        answer = divide(calc.firstNumber, calc.secondNumber);
            break;
        case 'add':
        answer = add(calc.firstNumber, calc.secondNumber);
            break;
        case 'subtract':
        answer = subtract(calc.firstNumber, calc.secondNumber);//using the private var that is global to this file, the pieces of what we need when we get there. it's going to run the calculation.
            break;
        default:
            'nope';
    }
 setDisplay(answer); //now you don't need a ptd because you made a function below that does it for you.
};

const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
};

const initialDisplay = () => {
    printToDom(0, 'result');
};

const setMathType = (newMathType) => {
    calc.mathType = newMathType;
};

const addNumber = (num) => { //passing num when we are calling addNumber
    if (calc.mathType === '') {
        calc.firstNumber += num; 
        setDisplay(calc.firstNumber);
    } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
};



export {calculate, addNumber, initialDisplay, setMathType};