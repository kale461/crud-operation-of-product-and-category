const express = require('express');
const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('page1');
    
});

router.get('/page=2&limit=10',(req,res)=>{
    res.render('page2');

});

router.get('/page=3&limit=10',(req,res)=>{
    res.render('page3');

});

router.get('/page=4&limit=10',(req,res)=>{
    res.render('page4');

});

router.get('/page=5&limit=10',(req,res)=>{
    res.render('page5');

});

router.get('/page=6&limit=10',(req,res)=>{
    res.render('page6')
});

router.get('/page=7&limit=10',(req,res)=>{
    res.render('page7')
});

router.get('/page=8&limit=10',(req,res)=>{
    res.render('page8')

});

router.get('/page=9&limit=10',(req,res)=>{
    res.render('page9')

});

router.get('/page=10&limit=10',(req,res)=>{
    res.render('page10')

});
 
module.exports = router;