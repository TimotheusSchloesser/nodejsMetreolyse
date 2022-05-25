import { Input } from './input.js'
import { sensMobile } from './settings.js'



var inputs = []

//The acceleration event of Your mobile phone.
if (window.DeviceMotionEvent = true) {
  window.addEventListener('devicemotion', function (event) {
    if (event.acceleration.x >= Math.abs(sensMobile())) {
      inputs[inputs.length] = new Input(inputs.length)
    }
  });
}


// To check the functionality on keyboard.
document.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key == " ") {
    inputs[inputs.length] = new Input(inputs.length)
  }
})

export function getInputs() {
  return inputs
}