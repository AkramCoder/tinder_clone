import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js'
import Cors from 'cors'

// App config
const app = express()
const port = process.env.PORT || 5000
const connection_url = 'mongodb+srv://akram:q6DFng5QiXEQKe3@cluster0.uz84o.mongodb.net/tinderDb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API Endpoints

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))