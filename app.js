const express = require('express');
const app= express();
const port = process.env.PORT || 3500;
const bodyParser=require('body-parser');
const models = require('./models/database');

app.set("view engine","ejs");
app.use(require('./routes/routes'));
app.use(express.static(__dirname,models));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});

