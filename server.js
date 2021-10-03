const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000);

app.use(express.static('public'));

//Requests
app.get('/home', (req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
});
app.get('/education',(req,res)=>{
    res.sendFile('./views/education.html',{root:__dirname})
});
app.get('/accomplishments',(req,res)=>{
    res.sendFile('./views/accomplishments.html',{root:__dirname})
});
app.get('/projects',(req,res)=>{
    res.sendFile('./views/projects.html',{root:__dirname})
});
app.get('/gallery',(req,res)=>{
    res.sendFile('./views/gallery.html',{root:__dirname})
});

