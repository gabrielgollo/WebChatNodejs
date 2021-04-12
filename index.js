const express = require('express')
const path = require('path')

const router = require('./routes.js')
const handlebars = require('express-handlebars')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000




// Configurações
// Template Engine
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Rotas
app.use("/", router);




app.listen(port, () => {
    console.log(`Server Running!! at http://localhost:${port}`)
});