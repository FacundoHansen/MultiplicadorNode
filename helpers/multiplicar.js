const fs = require('fs');
const crearArchivo= async (base,listar = false,hasta) => {    
    try {        
        
        let salida = '';
        for(let i=1 ; i<=(hasta) ; i++){
            salida += `${base} X ${i} = ${base*i}\n`;
        }
        
        if (listar){
            console.log(`Tabla del: ${base}`);
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw (`Ocurrio un error con base ${base}`,error);
    }
}
module.exports = {
    crearArchivo
}