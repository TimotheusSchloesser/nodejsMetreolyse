'use strict'

const database = require("../database");

const getPostApiTrain =  function(req, res) {
  const alias = "req.body.alias"
  console.log(JSON.stringify(alias));
  const target = "req.body.target"
  console.log(alias);


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
