import {initialDisplay} from './components/calculator.js';
import attachEvents from './helpers/buttonEvents.js';


const initializeApp = () => {
    attachEvents();
    initialDisplay();
}
initializeApp();






//this is called a switch statement above which is clearer than writing if and else statements like crazyz. breaks apply to make sure that it's not continuously going thru the switch.
// calculate (4, 2, 'multiply');

// you don't need curly brackets when you are exporting default bc it won't export an object