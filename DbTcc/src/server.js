const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const multer = require('multer')

require('./models/')

const app = express()

const upload = multer({
    dest: './uploads'
})

app.use(cors())
app.use(express.json())
app.use(routes)

const port = '3000' || process.env.port;

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file : req.file})
});

app.get('/upload', upload.single('file'), (req, res) => {
    res.json({ file : req.file})
});

app.listen(port, () => console.log('App na porta '+ port))