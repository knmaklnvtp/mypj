const
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'), // for cookie parser
    bodyParser = require('body-parser'), // for body parsing
    csrf = require('csurf'), // Use csurf to create a csrf token and validation
    {
        function1,
        function2
    } = require('./middleware/post.process.js'),

    // Setup middleware
    csrfProtection = csrf({
        cookie: true
    }),
    parseForm = bodyParser.urlencoded({
        extended: false
    }),
    application = express(),
    PORT = process.env.PORT | 9393,

    // Application use ==================================================
    // Parse cookie
    listUse = [cookieParser(), express.static(path.join(__dirname, '../dist'))]

// Application config
application

    .use(listUse)

    .set('views', path.join(__dirname, '../dist'))

    .set('view engine', 'pug')

    .get('/', csrfProtection, (req, res, next) => {
        res.render('master', {
            csrfToken: req.csrfToken()
        })
    })

    .post('/process', [parseForm, csrfProtection, function1, function2])

    .listen(PORT, () => {
        console.log(`Application is listening on ${PORT}`)
    })