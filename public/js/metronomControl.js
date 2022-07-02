import { Timer } from './timer.js'
import { Input } from './input.js'
import { traindiaryJSON } from './traindiaryJSON.js'
import { toSaveLocal } from './toSaveLocal.js'
import { insertToDatabase } from './traindiary.js'

const tempoDisplay = document.querySelector('.tempo')
const decreaseTempoBtn = document.querySelector('.adjBpm-btn-minus')
const increaseTempoBtn = document.querySelector('.adjBpm-btn-plus')
const tempoSlider = document.querySelector('.slider')
const startStopBtn = document.querySelector('.startButton')
const clickAudio = new Audio('../audio/click_01.mp3')
// const dbDisplay = document.querySelector('.dbBpm')
// const dbStatistic = document.querySelector('.dbStats')


let bpm = 150
// let stats = statistics()
// console.log(statistics())
// if (dbStatistic) dbStatistic.textContent = stats
// if (tempoDisplay) {
//     tempoDisplay.textContent = bpm
//     dbDisplay.textContent = bpm
// }

let isRunning = false

if (decreaseTempoBtn) {
    decreaseTempoBtn.addEventListener('click', () => {
        if (bpm <= 10) { return }
        bpm--
        validateTempo()
        updateMetronome()
    })
}
if (increaseTempoBtn) {
    increaseTempoBtn.addEventListener('click', () => {
        if (bpm >= 300) { return }
        bpm++
        validateTempo()
        updateMetronome()
    })
}

if (tempoSlider) {
    tempoSlider.addEventListener('input', () => {
        bpm = tempoSlider.value
        validateTempo()
        updateMetronome()
    })
}
if (startStopBtn) {
    startStopBtn.addEventListener('click', () => {
        if (!isRunning) {
            metronome.start()
            isRunning = true
            startStopBtn.textContent = 'O'
        } else {
            metronome.stop()
            traindiaryJSON()
            toSaveLocal()
            insertToDatabase()
            isRunning = false
            startStopBtn.textContent = '>'
        }
    })
}

function updateMetronome() {
    tempoDisplay.textContent = bpm
    // dbDisplay.textContent = bpm
    tempoSlider.value = bpm
    metronome.timeInterval = 60000 / bpm
}
function validateTempo() {
    if (bpm <= 10) { return 10 }
    if (bpm >= 300) { return 300 }
}

function playClick() {
    clickAudio.play()
    checkIt.getTwelth()



}

// Give the metronome
export function getTimer() {
    return metronome.tBc()
}
export function getBpm() {
    return bpm
}


const metronome = new Timer(() => { playClick() }, 60000 / bpm)
const checkIt = new Input()