'use strict'

const traindiaryJSON = require('../../public/js/traindiaryJSON')
const getTimeStamp = require('../../public/js/getDate')

const trainDate = traindiaryJSON.getDate()
const trainBpm = traindiaryJSON.getBpm()
const accuracyPerc = traindiaryJSON.getAccPerc()
const test = [{_id: trainDate, 
    date: getTimeStamp(), 
    bpm: trainBpm,
    accuracy: accuracyPerc}]


const getTraindiary = function(req, res) {
    // res.render("traindiary"),
    res.json(test)
    res.end()
}
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