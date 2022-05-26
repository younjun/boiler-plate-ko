const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yongjun:abcd1234@boilerplate.rby30.mongodb.net/?retryWrites=true&w=majority',{
}).then(() => console.log('MongoDB Connected..'))
 .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Express app listening on port ${port}!`))