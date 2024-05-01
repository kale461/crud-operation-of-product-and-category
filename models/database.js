const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

conn.connect((err)=>{
    if(err);
    console.log("mysql database connected");

    conn.query('select * from page1',(err,data)=>{
        if(err);
        console.log(data);
    })

});

module.exports=conn;

