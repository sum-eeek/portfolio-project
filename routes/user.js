// Create a new router
const express = require("express")
const router = express.Router()

router.get('/register', function (req, res, next) {
    res.render('register.ejs')                                                               
})

router.post('/registered', function (req, res, next) {
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered !')                                                                      
})

// Export the router object so index.js can access it
module.exports = router