

const express=require('express');
const app=express();
const port=3002;

app.use('/',express.static('public'));


app.get('/hello',(req,res)=>{
    res.send('Hello World!');
});

app.get('/budget',(req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    const data=require('./budgetdata.json');
    res.json(data);
    
});

app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}');
});