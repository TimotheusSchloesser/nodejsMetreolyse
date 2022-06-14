'use strict'

const getApi = function (database) {
    if (!database) {
        throw new Error('Database missing')
    }
    return function (req, res) {
            database.createEntry(err, traindiary => {
                if(err) {
                    return res.status(500).end()
                }
                res.send(traindiary)  // 201 = Created
            })
       
    }
}
module.exports = getApi