
// Resumen de uso de módulos
export let nombre = "Miguel Angel Castro Escamilla";

// //Export default
// function saludar(){
//     return "Hola como estas";
// }
// export default saludar;


// Crear un alias (namespace) para los elementos importados
function edad(){
    return 23;
}
let diplomados = ()=>{
    return "Diplomado de JavaScript Nivel 2";
}
let dirrecion = function(){
    return true;
}
let data = {
    hobbis: [],
    misHobbis: function(...arg){
        this.hobbis.push(...arg);
    },
    getHobbis: function(){
        return JSON.stringify(this.hobbis);
    }
    
}
let metodosInformacionPersonal = Object.create(data);
metodosInformacionPersonal.edad = edad();
metodosInformacionPersonal.diplomados = diplomados();
metodosInformacionPersonal.dirrecion = dirrecion();


export default metodosInformacionPersonal;
