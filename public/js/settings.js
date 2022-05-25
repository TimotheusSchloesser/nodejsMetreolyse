
var online = navigator.online ? 1 : 0

if (online == 1) document.querySelector(".onOff").innerHTML = online




// Some code to set the senseibility of Your mobile phone.
const triggerSense = document.querySelector('.senseSlider');
const sensePlace = document.querySelector('.sense');

let sensibility = 0.5
if (sensePlace) sensePlace.textContent = sensibility

addEventListener('input', () => {
    if (triggerSense) sensibility = triggerSense.value;
    if (sensePlace) sensePlace.textContent = sensibility
    validateSens()
    updateSens()
    sensMobile()
});

function updateSens() {
    if (triggerSense) triggerSense.value = sensibility
}



function validateSens() {
    if (sensibility <= 0.1) { return 0.1 };
    if (sensibility >= 1) { return 1 };
}


export function sensMobile() {
    return sensibility
}