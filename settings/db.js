const mysql = require('mysql')

const connection = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-04.cleardb.com',
    port: 3306,
    user: 'b4e11c7a453daa',
    password: 'f29fb6e3',
    database: 'heroku_a23db55140510ad'
})

module.exports = connection