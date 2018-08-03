const express = require('express')//part five
const morgan = require('morgan') //part 7
const bodyParser = require('body-parser') //part 7

const userInfo = require('./api/routes/user') //part 6

const app = express() // part five


// morgan
app.use(morgan('dev')) //part 7


// body parser
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 3000 // part 5


// ^_^_^_^_^ part 5 ^_^_^_^_^ \\

//get
app.get('/', (req, res, next) => {
    res.send('<h1>I am First Page</h1>')
    // next() // optional
})




// ^_^_^_^_^ part 6 ^_^_^_^_^ \\
// use
app.use('/api/user', userInfo)

app.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        // id : req.url //old
        id
    })
})





//start server by this code
app.listen(PORT, () => {
    console.log('i am starting point for server');
})