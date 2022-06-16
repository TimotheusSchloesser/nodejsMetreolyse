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
            
            database.invokeTraindiary(traindiary.id, err => {
                if(err) {
                    return res.status(500).end() // interner Fehler
                }
            })
            res.redirect(307, traindiary.target)

           
        })
    }
}
module.exports = getAlias