const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la multiplicacion'
    })
    .option('l',{
        alias:'listar',
        type:'boolean', 
        default:10,
        describe:'Nos muestra una lista de las multiplicaciones'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:true,        
        describe:'Hasta que numero queremos multiplicar?'
    })
    .check((argv,options)=>{
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;