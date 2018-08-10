require('./config/config')

const port = process.env.PORT;
const express = require('express')
const app = express();


app.listen(port, (err) => {

    if (err) throw new Error(err)

    console.log(`Listo y escuchando el puerto ${port}`);

});