require('dotenv').config();
const express = require("express");
const port = 4005;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())
const router = require('./src/routes/index');
app.use('/travel-api/v1', router);

app.get('/', (req,res) => {
    res.send('hello there..!')
})
app.listen(port, () => {
  console.log(`server running on port ${port}`); 
})
