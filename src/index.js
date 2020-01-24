require('./services/mongo')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const routes = require('./routes')

app.use(routes)
app.use(express.json({
    extended: false
}));


app.listen(PORT, ()=> console.log('escutando na porta ' + PORT))