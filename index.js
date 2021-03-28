const express = require('express')
const app = express()

const users = ["Raufu", "Prezens", "Eftykhar"]

app.get('/', (req, res) => {
    const fruit = {
        product: 'apple',
        price: 150
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({ fruit: 'banana', quantity: 500, price: 5000 })
})

app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    console.log(req.query.sort);
    const name = users[id]
    res.send({ id, name });
})
app.listen(3000, () => console.log('Listening to Port 3000'));