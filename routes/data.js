// Create a new router
const express = require("express")
const router = express.Router()

router.get('/search',function(req, res, next){
    res.render("search.ejs")
})

router.get('/search_result', function (req, res, next) {
    let sqlquery = "SELECT * FROM film WHERE name LIKE '%" + req.query.search_text + "%'"
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render("list.ejs", {availableFilm:result})
     }) 
})

router.get('/add', function(req, res, next){
    res.render("add.ejs")
})

router.post('/filmadded', function (req, res, next) {
    let sqlquery = "INSERT INTO film (name, price) VALUES (?,?)"
    let newrecord = [req.body.name, req.body.price]
    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            next(err)
        }
        else
            res.send(' This film has been added, name: '+ req.body.name + ' price '+ req.body.price)
    })
})

router.get('/list', function(req, res, next) {
    let sqlquery = "SELECT * FROM film"
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render("list.ejs", {availableFilm:result})
     })
})

// Export the router object so index.js can access it
module.exports = router