const express = require('express');
let app = express();
const PORT = 5000;
let path = require('path');

// Enrutadores
let indexRouter = require('./routers/indexRouter');
let marcasRouter = require('./routers/marcasRouter');
let sucursalesRouter = require('./routers/sucursalesRouter');

// Middlewares
app.use(express.static('public'));

// Middlewares of routes
app.use('/', indexRouter);
app.use('/marcas', marcasRouter);
app.use('/sucursal', sucursalesRouter);

// Server
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
http://localhost${PORT}`));