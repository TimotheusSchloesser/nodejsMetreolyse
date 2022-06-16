'use strict'

const getStuff = function(req,res) {
    res.render("stuff", {
       title: "Stuff"})
    }
module.exports = getStuff
