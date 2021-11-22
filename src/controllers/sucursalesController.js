let db = require('../database');

let controller = {
    getStore: (req, res) => {                                                                                                                                                                                                                                                                                                          
            res.set({'content-type':'text/plain;charset=utf-8'})
            res.write(`
            *****************************
            +++++NUESTRAS SUCURSALES+++++
            *****************************
            Empresa lider en el mercado.
    
    
            =============================
            Nuestras sucursales:
            `)
            db.forEach(sucursal => {
                res.write(`
                ${sucursal.sucursal}
                Telefono: ${sucursal.telefono}
                Direccion: ${sucursal.direccion}
            `)
        })
        res.end()
    },
    getOneStore:(req, res) => {
        let paramStore = req.params.sucursal.trim()
        res.set({'content-type':'text/plain;charset=utf-8'})
        let store = db.find(store => {
            return store.sucursal.toLowerCase() === paramStore.toLowerCase()
        })
        //res.send(store) Nos muestra el objeto store
        if(store !== undefined){
            res.write(`
            **********************************
            ${store.sucursal.toUpperCase()}
            **********************************

            ==================================
            ${store.telefono}
            ${store.direccion}
            `)

            res.write(`Cantidad de autos: ${store.auto}
            Nuestros autos
            __________________________________
            `)

            store.autos.forEach(auto => {
                res.write(`
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Año: ${auto.anio}
                `)
            })
        }else{
            res.write(`La sucursal ${req.params.sucursal} no existe`)
        }
        res.end()
    }
}

module.exports = controller