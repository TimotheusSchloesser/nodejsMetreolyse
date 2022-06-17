'use strict'
const test = [{"bpm":"100"}]
const test2= [{"bla":"blub","deee":"Qtess"}]
const getTraindiary = function(req, res) {
    // res.json(test)
    res.json(test2)
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