import {calculate} from './components/calculator.js';
import {buttonEvents} from './helpers/buttonEvents.js';

calculate (4, 2, 'subtract');

const initializeApp = () => {
    buttonEvents();
}
initializeApp();






//this is called a switch statement above which is clearer than writing if and else statements like crazyz. breaks apply to make sure that it's not continuously going thru the switch.
// calculate (4, 2, 'multiply');