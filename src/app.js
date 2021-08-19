const express =require('express');
const app=express();
const path = require('path');
const hbs=require('hbs'); 
const port =process.env.PORT||8000;
const pubp=path.join(__dirname,'../public');
const view_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',view_path);
hbs.registerPartials(partials_path);
app.use(express.static(pubp));

app.get("/",(req,res)=>{
    res.render('index.hbs');
});
app.get("/about",(req,res)=>{
    res.render('about.hbs');
});
app.get("/weather",(req,res)=>{
    res.render('weather.hbs');
});
app.get("*",(req,res)=>{
    res.render('404',{
        errorMsg:"OOps! Page Not Found"
    });
});

app.listen(port,()=>{
console.log(`welcome to port ${port}`);
});