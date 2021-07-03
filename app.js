import {nombre} from './main.js';
// import saludar from './main.js';
import metodosInformacionPersonal from './main.js';

console.log(`${nombre}`);
// console.log(saludar());

console.log(metodosInformacionPersonal.edad);
console.log(metodosInformacionPersonal.diplomados);
console.log(metodosInformacionPersonal.dirrecion);
metodosInformacionPersonal.misHobbis("Cocinar","Programar");
console.log(metodosInformacionPersonal.getHobbis());
console.log(metodosInformacionPersonal);

