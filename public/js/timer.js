//import  test  from './input.js'
// Metronome-Timer for Metrolyse
 
/*
 * Funktion timer - to control the time steps
 * timeInterval - this.timeinterval
 * options - Gets the 
 * moment - Timer-Start + time interval
 */
export function Timer(callback, timeInterval, opt) {
    this.timeInterval = timeInterval

    // Start timer
    this.start = () => {
        // Set the expected time
        this.expected = performance.now() + this.timeInterval
        this.timeout = setTimeout(this.round, this.timeInterval)


        console.log("Start")
    }

    // Stop timer
    this.stop = () => {
        clearTimeout(this.timeout)
        console.log("Stop")
    }
    // Adjusting the timeInterval
    this.round = () => {
        var drift = performance.now() - this.expected
        callback()
        
        
        this.timeout= setTimeout(this.round, this.timeInterval - drift)
        //console.log("tI: " + timeInterval)
        this.takeBackControl= this.expected += this.timeInterval
    }

     //The reference to Your input-signal
     this.tBc = () => { 
         return this.expected
     }

}
export default Timer
