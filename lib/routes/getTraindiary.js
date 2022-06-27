'use strict'

// const traindiaryJSON = require('../../public/js/traindiaryJSON')
// const getTimeStamp = require('../../public/js/getTimeStamp')
// const tSL = require('../../public/js/toSaveLocal')

// const trainDate = traindiaryJSON.getDate()
// const trainBpm = traindiaryJSON.getBpm()
// const accuracyPerc = traindiaryJSON.getAccPerc()
const test = [{_id: 1, 
    date: 2, 
    bpm: 150,
    accuracy: 70}]


const getTraindiary = function(req, res) {
     res.render("traindiary"),
    res.end()
}



// const getTraindiary = function(req, res, next) {
//     res.send("https://lyra.et-inf.fho-emden.de:20144/api/getPostApiTrain/?results=10")
//     .then((response)=> {
//         response.data.result.map((test)=> {
//             test.push(test)
//         })
//         console.log(test)
//         res.render("traindiary", {
//             test
//         })
//     })
//     .catch((err)=> {
//         console.log(err)
//         res.render("traindiary")
//     })
// }

module.exports = getTraindiary
// const alias = req.params.alias

// database.getDate(alias, (err, dates) => {
//     if (err) {
//         return res.status(404).end() // 404 = not found
//     }
//     database.showDates(dates, id, err => {
//         if (err) {
//             return res.status(500).end()
//         }

//         res.redirect(307, dates.target)
//     })
// })