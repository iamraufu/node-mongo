const express = require('express')
const app = express()

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
app.listen(3000, () => console.log('Listening to Port 3000'));