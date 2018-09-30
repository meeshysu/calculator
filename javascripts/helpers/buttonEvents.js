import {addNumber, setMathType, calculate} from '../components/calculator.js'



const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const multiplyButton = document.getElementById('multiplyButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');



const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click', () => {
        setMathType('divide');
    })
};

const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', () => {
        setMathType('multiply');
    })
};

const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', () => {
        setMathType('subtract');
    })
};

const plusButtonEvent = () => {
    plusButton.addEventListener('click', () => {
        setMathType('add');
    })
};

const equalsButtonEvent = () => {
    equalsButton.addEventListener('click', calculate)
};


const sevenButtonEvent = ( ) => {
    sevenButton.addEventListener('click', addNumberCaller)
};

const eightButtonEvent = ( ) => {
    eightButton.addEventListener('click', addNumberCaller)
};

const nineButtonEvent = ( ) => {
    nineButton.addEventListener('click', addNumberCaller)
};

const fiveButtonEvent = ( ) => {
    fiveButton.addEventListener('click', addNumberCaller)
};

const sixButtonEvent = ( ) => {
    sixButton.addEventListener('click', addNumberCaller)
};

const fourButtonEvent = ( ) => {
    fourButton.addEventListener('click', addNumberCaller)
};

const oneButtonEvent = ( ) => {
    oneButton.addEventListener('click', addNumberCaller)
};

const twoButtonEvent = ( ) => {
    twoButton.addEventListener('click', addNumberCaller)
};

const threeButtonEvent = ( ) => {
    threeButton.addEventListener('click', addNumberCaller)
};



const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    divideButtonEvent();
    equalsButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    multiplyButtonEvent();
    subtractButtonEvent();
    plusButtonEvent();
}

export default attachEvents;

