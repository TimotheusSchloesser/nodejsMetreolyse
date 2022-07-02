'use strict'
import { getBpm } from './metronomControl.js'
import { statistics } from './input.js'
import { getTimeStamp } from './getTimeStamp.js'



// From Data to JSON
export function traindiaryJSON() {
    const statistic = statistics() / 10
    const jsonTD = {
        "date": getTimeStamp(),
        "bpm": getBpm(),
        "accuracy": statistic}
    
    return jsonTD
}