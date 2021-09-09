const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT ||8080;
const app = express()
const port = 8080
app.use(cors());

app.get('/api/v1/83phuket', (req, res) => {
  res.send('Hello my API data!')
})

app.listen(PORT, () => {
  console.log(`my app is running`)
})