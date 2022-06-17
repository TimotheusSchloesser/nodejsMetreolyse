'use strict'

const getPostApiTrain = function(req, res) {
    res.render('traindiary', {
        title: 'AnotherTest',
        message: 'to the unknown'
    })
} 
module.exports = getPostApiTrain







// const alias = req.params.alias,
// target = req.body.target

// database.createDate(alias, target, err => {
// if (err) {
//     return res.status(500).end() //interner Serverfehler
// }
// res.status(201).end()// created
// })
