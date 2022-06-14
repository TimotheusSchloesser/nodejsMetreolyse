'use strict'

const getAlias = function (database) {
    if (!database) {
        throw new Error('Database missing')
    }
    return function (req, res) {
        const alias = req.params.alias

        database.showEntry(alias, (err, traindiary) => {
            if (err) {
                return res.status(404).end()
            }
            res.redirect(307, traindiary.target)
        })
    }
}
module.exports = getAlias