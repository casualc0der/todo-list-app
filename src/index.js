import{ project } from './project.js'
import { viewController } from './viewController.js'




const consoleLogger = () => console.log('Hello!');


viewController.createButton('Hello!', consoleLogger);
