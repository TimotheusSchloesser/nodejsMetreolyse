'use strict'

const database = require('../database')

// datenAus = database.findDate()
const command = "findResult"
// const data = database(command)
//     console.log(JSON.stringify(data))

const getDb = function(req, res) {
    res.render('db'),
    res.end()}
    
module.exports = getDb









// 'use strict'

// const getDb = function(req,res) {
//     res.render('db', { title: 'dbTest', message: "dbTestDate",
//     title: 'Traindiary'});
//     }
// module.exports = getDb