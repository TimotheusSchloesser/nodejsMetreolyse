'use strict'

const getAlias = function(database) {
    if(!database) {
        throw new Error('Database missing')
    }
    return function(req, res) {
        const alias = req.params.alias

        database.getDate(alias, (err, traindiary) => {
            if(err){
                return res.status(404).end()
            }
            res.redirect(307, mapping.target)
            database.invokeTraindiary(traindiary.id, err => {
                if(err){
                    return res.status(500).end()
                }
                res.redirect(307, mapping.target)
            })
        })
    }
}
module.exports = getAlias