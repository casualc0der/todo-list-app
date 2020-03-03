import {controller} from './controller.js';
import "./styles.css";

if(controller.storageAvailable('localStorage')) {
    console.log('Yes')
}
else {
    console.log('No')
}

let itemsArray = [];
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))