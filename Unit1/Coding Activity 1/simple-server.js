const express=require("express");
const app= express();
const port=3009;
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/data',(req,res)=>{
    res.send("Hello World with data")
})
app.listen(port,()=>{
    console.log(`Example app listening the port ${port}`)
})
