const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/api/articles/:name', (req, res) => {
    const articleName = req.params.name
})

app.post('/api/articles/:name/add-comments', (req, res) => {
    const { username, text } = req.body
    const articleName = req.params.name

    articlesInfo[articleName].comments.push({ username, text })
    res.status(200).send(articlesInfo[articleName])
})

app.listen(4000, () => console.log('Listening on port 8000'))