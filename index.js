// Import express and ejs
var express = require ('express')
var ejs = require('ejs')

//Import mysql module
var mysql = require('mysql')


// Create the express application object
const app = express()
const port = 8000

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs')

// Set up the body parser 
app.use(express.urlencoded({ extended: true }))

// Set up public folder (for css and statis js)
app.use(express.static(__dirname + '/public'))

// Define the database connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'appuser',
    password: 'app2027',
    database: 'film_shop'
})

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to database')
})
global.db = db

// Load the route handlers
const mainRoutes = require('./routes/main')
app.use('/', mainRoutes)

// Load the route handlers for /user
const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

// Load the route handlers for /data
const dataRoutes = require('./routes/data')
app.use('/data', dataRoutes)

// Start the web app listening
app.listen(port, () => console.log(`Node app listening on port ${port}!`))