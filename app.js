const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const dbConnection = require('./connection');
const PORT = process.env.PORT ||8080;
const app = express()
const port = 8080
app.use(cors());

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/83phuket', (req, res) => {

    dbConnection('data')
    .select('*')
    .then( data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
})

app.get('/api/v1/83phuket:id', (req, res) => {
  dbConnection('data')
    .select('*')
    .limit(1)
    .where({ id: req.params.id })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.listen(PORT, () => {
  console.log(`my app is running`)
})

//res.json({message: '83_Phuket_data'})