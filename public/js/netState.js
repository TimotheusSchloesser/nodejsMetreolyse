


window.addEventListener('offline', function(e) { console.log('offline'); });

window.addEventListener('online', function(e) { console.log('online'); });






// document.addEventListener('DOMContentLoaded', init, false);
// const statusElem = document.querySelector('.page-status')
// var onOff
// function init(statusElem, onOff) {
//   if (!navigator.onLine) {
//     statusElem.innerHTML = 'offline'
//     onOff = false
//     }
//   if(navigator.online){
//     const statusElem = document.querySelector('.page-status')
//     statusElem.innerHTML = 'online'
//     onoff = true
   
//   }
//   checkWebStatus(onOff)
//   return onOff
// }

// function checkWebStatus(onOff){
//   if(onOff == false){
//     console.log('offline')
//   }
  
//   if(onOff == true){
//     console.log('online')
//   }
// }
// // checkWebStatus(onOff)