import {addNumber} from '../components/calculator.js'

// object
const calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: '', //inner html is going to return a string, we want a space in between the paranthensis. 
}

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

const sevenButtonEvent = ( ) => {
    sevenButton.addEventListener('click', addNumberCaller)
};

const eightButtonEvent = ( ) => {
    eightButton.addEventListener('click', addNumberCaller)
};

// const nineButtonEvent = ( ) => {
//     nineButton.addEventListener('click', addNumberCaller)
// };

const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
    // nineButtonEvent();
}

export default attachEvents;