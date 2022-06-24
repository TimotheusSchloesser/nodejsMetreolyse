'use strict'

// const database = require('../database')

// datenAus = database.findDate()

const getDb = function(req, res) {
    res.render('db', { title: 'dbTest', message: "datenAus",
    title: 'Traindiary'});
    res.end()
    }
module.exports = getDb









// 'use strict'

// const getDb = function(req,res) {
//     res.render('db', { title: 'dbTest', message: "dbTestDate",
//     title: 'Traindiary'});
//     }
// module.exports = getDb