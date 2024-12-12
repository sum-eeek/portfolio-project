// Create a new router
const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

router.get('/register', function (req, res, next) {
    res.render('register.ejs')                                                               
})

router.post('/registered', function (req, res, next) {
    const plainPassword = req.body.password;
    const firstname = req.body.first;
    const lastname = req.body.last;
    const email = req.body.email;
    const username = req.body.username;
    //res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered !')

    //let sqlquery = "INSERT INTO register (firstname, lastname, email, username, hashedPassword) VALUES (?,?,?,?,?)"

    bcrypt.hash(plainPassword, saltRounds, function(err, hashedPassword) {
        //store hashed password in database
        if (err) {
            next(err)
        } else {
            let sqlquery = "INSERT INTO login (firstname, lastname, email, username, hashedPassword) VALUES (?,?,?,?,?)"
            let newrecord = [firstname, lastname, email, hashedPassword]

            db.query(sqlquery, newrecord, (err, result) => {
                if(err){
                    next(err)
                }
                else {
                    result = 'Hello ' + req.body.first + ' ' + req.body.last + 'you are now registered ! We will send you an email at ' + req.body.email;
                    result += 'Your password is: ' + req.body.password + 'and hashed password is: ' + hashedPassword;
                    res.send(result);
                }
            })
            
        }
    })
})

// Export the router object so index.js can access it
module.exports = router