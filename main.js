//below you have three of these within, you will have three below
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}

const multiply = (n1, n2) => {
    return n1 * n2;
};

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
calculate (4, 2, 'multiply');
//this is called a switch statement above which is clearer than writing if and else statements like crazyz. breaks apply to make sure that it's not continuously going thru the switch.