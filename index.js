const express = require('express')
const app = express();

const rootCall = (req, res) => res.send('Thank You!')

app.get('/', )

app.listen(3000, () => console.log("Listening to Port 3000"))