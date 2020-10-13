const express =require('express');
const app = express();
const port = process.env.PORT || 3000;

app.all('/',(req,res)=>{
console.log(req.params);
})
app.get('/home',(req,res,next)=>{
    console.log('man1');
    next();
    
},(req,res)=>{
    console.log('man2');
    
})
app.listen(port,()=>{
    console.log(`server started at ${port}`);
})