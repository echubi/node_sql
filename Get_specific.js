const mysql = require('mysql')

const con  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'club'
});

con.connect(function (err) {
    if (err) throw err
    con.query("SELECT name, address FROM  customers", function (err, result, fields){
        if (err) throw err
        console.log(result);
    });
});