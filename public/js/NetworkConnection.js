'use strict';

const events = require('events')
const needle = require('needle')
const EventEmitter = events.EventEmitter

class NetworkConnection extends EventEmitter {
    constructor (options) {
        if(!options) {
            throw console.error('Where are my options gone!');
        } 
        if(!options.host) {
            throw console.error('Where are my host gone!');
        }  
        if(!options.port) {
            throw console.error('Where are my ports gone!');
        }

        super()

        this.host = options.host
        this.port = options.port

        this.isOnline = undefined
    }  

    onlineTest () {
        needle.get('https://${host}:${port}/')
    }
}

module.exports = NetworkConnection

