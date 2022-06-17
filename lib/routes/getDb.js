'use strict'

const database = require('../database')

const getDb = function(req, res) {
    res.render('db', { title: 'dbTest', message: 'database.findDate()',
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