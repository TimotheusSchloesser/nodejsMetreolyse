'use strict'

const postApiAlias = function (database) {
    if (!database) {
        throw new Error('Database missing')
    }
    return function (req,res) {
        const alias = req.params.alias,
            target = req.body.target
    
            database.createEntry(alias, target, err => {
                if(err) {
                    return res.status(500).end()
                }
                res.status(201).end()  // 201 = Created
            })
       
        }
    }
module.exports = postApiAlias


