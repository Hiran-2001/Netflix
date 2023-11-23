const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("HEllo")
})

app.listen(3001,()=>{
    console.log("server listening on port 3001");
})