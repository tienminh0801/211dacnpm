const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '84IvQk(Kkd.m(7bl',
    database: 'do_an'
})

connection.connect((err) => {
    if (err) console.log("Cannot connect MySql because ", err)
    else console.log("Connected to MySql !!!!")
})

module.exports = connection