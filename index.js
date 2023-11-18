require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

//importing routes


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`App is running on ${port}`)
})