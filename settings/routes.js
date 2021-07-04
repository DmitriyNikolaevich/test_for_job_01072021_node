'use strict'

module.exports = (app) => {

    const commonControler = require('../controllers/commonController.js')
    
    app.route(`/getcategories`).get(commonControler.getCategories)
    app.route(`/getproducts`).get(commonControler.getProducts)
    app.route(`/postorder`).post(commonControler.postOrder)

}