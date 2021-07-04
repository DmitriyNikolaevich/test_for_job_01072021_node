'use strict'

const response = require('../response')
const db =require('../settings/db')


exports.getCategories = (req, res) => {
    
    const sql = `SELECT * FROM categories`

    db.query(sql, (error, rows, fields) => {
        try {
            response.status(rows, res)
        } catch (error) {
            console.log(error)
        }
    })

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')

}

exports.getProducts = (req, res) => {
    
    const sql = `SELECT categories_id, products.id, name, price, delivery, img FROM categories_products LEFT JOIN products ON value = products.id`

    db.query(sql, (error, rows, fields) => {
        try {
            response.status(rows, res)
        } catch (error) {
            console.log(error)
        }
    })

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')

}