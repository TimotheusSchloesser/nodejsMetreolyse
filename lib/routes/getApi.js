'use strict'

// const routes = require(".")


const getApi = function(req, res, next) {
    res.render('api', {title: 'TEst',
    output: req.params.id},
    )
    // res.end()
}   
module.exports = getApi





