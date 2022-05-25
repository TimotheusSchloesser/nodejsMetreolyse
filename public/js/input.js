import { getTimer, getBpm } from './metronomControl.js'
import { getInputs } from './acceleration.js'

export class Input {
  constructor(id, date) {
    this.id = id
    this.date = performance.now()
  }


  // The time of input and the metronome time come together
  getTwelth() {
    getInputs().forEach(input => {
      let metro = getTimer()
      if (input.id < 12) {
        input.date += input.date
        metro += metro
      } else { counterPart(input.date, input.id, metro) }

    })
  }

}

var checkSum
var checkStats

// Set the data to Zero
// @return checksum, if zero You´re perfectly tight. 
function counterPart(dates, ids, metros) {
  checkSum = Math.round(dates - metros)
  getInputs().length = 0
  statistics()
  
}

// How tight can You get from start to stop from 0 the best to whatever
export function statistics() {
  let checkStats = checkSum
  checkStats += checkStats
  return checkStats
}
//Just the export to get the checksum attribute.
export function sumToCanvas() {
  return checkSum
}

// export function expStats(){
//    return checkStats
// }