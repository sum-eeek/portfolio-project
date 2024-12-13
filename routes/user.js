// Create a new router
const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

router.get('/register', function (req, res, next) {
    res.render('register.ejs')                                                               
})

// send register data to login table + hash password
router.post('/registered', function (req, res, next) {
    const plainPassword = req.body.password;
    const firstname = req.body.first;
    const lastname = req.body.last;
    const email = req.body.email;
    const username = req.body.username;

    let sqlquery = "INSERT INTO register (firstname, lastname, email, username, hashedPassword) VALUES (?,?,?,?,?)"

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
                    result += 'Your password is: ' + req.body.password;
                    res.send(result);
                }
            })
            
        }
    })
})

router.get('/login', function (req, res, next) {
    res.render('login.ejs')                                                               
})

router.post('/login', function (req, res) {
    let loginQuery = "SELECT * FROM login WHERE username = ?";
    const { username, password } = req.body;

    // prevents blank data being stored in database
    db.query(loginQuery, [username], (err, result) => {
        if (result.length === 0) {
            res.send('Invalid username or password, try again');
            return;
        }

        const hashedPassword = result[0].hashpassword;
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (isMatch) {
                // if login is sucessful
                res.send(`Welcome ${username}!`);
            } else {
                // if passwords do not match
                res.send('Invalid username or password, try again');
            }
        });

    })

})

// selects data from login table
router.get('/listusers', function(req, res, next) {
    let sqlquery = "SELECT * FROM login"
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render("listusers.ejs", {availableLogin:result})
     })
})

// Export the router object so index.js can access it
module.exports = router