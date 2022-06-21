'use strict'

const getPostApiTrain = function(req, res) {
    const { username, password } = req.body;
    const { authorization } = req.headers;
    res.send({
      username,
      password,
      authorization,
    });
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
