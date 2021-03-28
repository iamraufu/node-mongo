const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome Raufu Prezens!');
})

app.listen(3000, () => console.log('Listening to Port 3000'));