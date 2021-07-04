const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '<qDn847m',
    database: 'test_for_job_01072021'
})

connection.connect((error) => {
    if (error) {
        return console.log(error);
    } else {
        return console.log('Подключение прошло успешно');
    }
})

module.exports = connection