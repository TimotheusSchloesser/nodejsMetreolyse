'use strict'

const getAlias = function(req, res) {
    const alias = req.params.alias

    database.getDate(alias, (err, dates) => {
        if (err) {
            return res.status(404).end() // 404 = not found
        }
        database.showDates(dates, id, err => {
            if (err) {
                return res.status(500).end()
            }

            res.redirect(307, dates.target)
        })
    })
}
module.exports = getAlias