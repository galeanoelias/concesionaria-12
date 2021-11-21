let db = require('../database');

let controller = {
    index: (req, res) => {
        //res.send('Hola mundo desde el controlador')
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        *****************************
        Bienvenido/a a nuestra página
        *****************************
        Empresa lider en el mercado.


        =============================
        Nuestras sucursales:
        `)
        db.forEach(sucursal => {
            res.write(`
            ${sucursal.sucursal}
            `)
        })
        res.end()
    }
    // contact: (req, res) => {
    //     res.send('Contacto')
    // }
}

module.exports = controller