import {printToDom} from '../helpers/util.js';
import {multiply} from '../helpers/maths.js';

const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType){
        case 'multiply':
        answer = multiply(num1, num2);
            break;
        case 'divide':
        answer = divide(num1, num2);
            break;
        case 'add':
        answer = add(num1, num2);
            break;
        case 'subtract':
        answer = subtract(num1, num2);
            break;
        default:
            'nope';
    }
 printToDom(answer, 'result');
};

export {calculate};