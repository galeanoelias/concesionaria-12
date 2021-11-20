const express = require('express');
let app = express();
const PORT = 5000;
let path = require('path');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views.html'))
});

// Server
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
http://localhost${PORT}`));