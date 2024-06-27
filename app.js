const express = require('express');
const app = express();
let path = require('path');

const port = process.env.port || 3001;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.use(express.static('public'));

app.get('/', (req, res) => {
    let pathHtml = path.resolve('./views/home.html')
    res.sendFile(pathHtml)
})

app.get('/register.html', (req, res) => {
    let pathHtml = path.resolve('./views/register.html')
    res.sendFile(pathHtml)
})

app.get('/login.html', (req, res) => {
    let pathHtml = path.resolve('./views/login.html')
    res.sendFile(pathHtml)
})