const mysql = require('mysql')

const connection = mysql.createPool({
    connectionLimit : 10,
    host: 'eu-cdbr-west-01.cleardb.com',
    port: 3306,
    user: 'b9a370a6448b89',
    password: '0b8ddc1f',
    database: 'heroku_46d3bfe27dd65e9'
})

module.exports = connection