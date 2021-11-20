let controller = {
    index: (req, res) => {
        res.send('Hola mundo desde el controlador')
    },
    contact: (req, res) => {
        res.send('Contacto')
    }
}

module.exports = controller