'use strict'

const getAlias = function(database) {
    if(!database) {
        throw new Error('Database missing')
    }
    return function(req, res) {
        const alias = req.params.alias
    }}
    
module.exports = getAlias