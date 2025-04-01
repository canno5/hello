const express = require("express");
const app = express();
const path = require("path");;
const fs = require("fs");
require('dotenv').config({path: ".env"});
let port = process.env.PROD || 2000;
let staticPath = path.join(__dirname, '../static');
let viewPath = path.join(__dirname, '../views');
app.use('/static', express.static(staticPath));
app.set('view engine', 'html');
app.set('views', viewPath);
app.engine('html', (path, options, cb)=>{
    fs.readFile(path, (err,data)=>{
        if(err) return cb(err);
        let realData = data.toString();
        cb(null, realData);
    })
});

app.get('/', (req,res)=>{
    res.render('index');
});
app.get('/about', (req,res)=>{
    res.render('about');
});
app.get('/services', (req,res)=>{
    res.render('services');
});
app.get('/contact', (req,res)=>{
    res.render('contact');
});

app.listen(port, ()=>{
    console.log('I am live to 2000');
});