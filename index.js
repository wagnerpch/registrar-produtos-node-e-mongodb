/**
 * Externals modules
 */
const express = require('express')
const exphbs = require('express-handlebars')

/**
 * Express constant
 */
const app = express()

/**
 * Partials path
 */
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

/**
 * Database connection
 */
const conn = require('./db/conn')

/**
 * Import Modules
 */
const Product = require('./models/Product')

/**
 * Import Routes
 */
const productsRoutes = require('./routes/productsRoutes')

/**
 * Import Controllers
 */
const ProductController = require('./controllers/ProductController')

/**
 * Setup do handlebars e view engine
 */
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

/**
 * Ready data of body of views
 */
app.use(
    express.urlencoded({
        extended: true,
    })
)

/**
 * Get data to Json
 */
app.use(express.json())

/**
 * Path of assets
 */
app.use(express.static('public'))

/**
 * Routes
 */
app.use('/products', productsRoutes)
app.get('/', ProductController.showProducts)

/**
 * Iniciar express
 */
app.listen(3000)