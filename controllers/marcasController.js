let controller = {
    index: (req, res) => {
        res.send('Marcas')
    },
    marca:(req, res) => {
        res.send(req.params.marca)
    }
}

module.exports = controller