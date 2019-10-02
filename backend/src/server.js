const express = require('express')

const app = express()

app.use(express.json())

// req.query = query string params
// req.params = route params
// req.body = request body

//GET, POST, PUT, DELETE
app.post('/users', (req, res) => {
    return res.json(req.body)
})

app.listen(3333)
