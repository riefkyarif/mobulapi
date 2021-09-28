var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'*******',
    database:'*******'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected');
});

module.exports = conn;