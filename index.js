const express = require("express");
const port = 4005;
const app = express();


app.get('/', (req,res) => {
    res.send('hello there..!')
} )

app.listen(port, () => {
  console.log(`server running on port ${port}`); 
})