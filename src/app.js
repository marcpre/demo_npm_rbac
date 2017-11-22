const express = require('express')
const session = require('express-session')
const eSession = require('easy-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use(eSession.main(session))
app.use(eSession.main(session, {
    rbac: {
        guest: {
            can: ['blog:read']
        },
        writer: {
            can: ['blog:create'],
            inherits: ['guest']
        }
    }
}));


// Add a path to allow easy login to any role
app.get('/login/:role', (req, res) => {
  req.session.login(req.params.role, () => {
    res.redirect('/')
  })
})

// A path to destroy our session
app.get('/logout', (req, res) => {
  req.session.logout(() => {
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  res.send(`Current role is ${req.session.getRole()}`)
})

app.get('/blog/create', eSession.can('blog:create'), function (req, res) {
    res.send('Blog edit')
})

// Service
const port = process.env.APP_PORT || 8080
const host = process.env.APP_HOST || 'localhost'

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`)
})

module.exports = app
