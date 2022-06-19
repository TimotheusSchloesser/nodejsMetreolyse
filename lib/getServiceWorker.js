'use strict'

const getServiceWorker = function(req,res) {
    res.render("index", {
    title: 'ServiceWorker'})
    }
module.exports = getServiceWorker