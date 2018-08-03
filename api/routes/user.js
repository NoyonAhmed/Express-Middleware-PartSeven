const express = require('express')
const router = express.Router()

//get
router.get('/', (req, res, next) => {
    res.send({
        massege : "i am user info"
    })
})

//post 
router.post('/', (req, res) => {
    res.json({
        massageTwo : 'i am user post ifo'
    })
})

//random get




module.exports = router