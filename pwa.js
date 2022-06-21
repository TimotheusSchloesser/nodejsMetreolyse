document.addEventListener('DOMContentLoaded', init, false);
function init() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('Service worker registered -->', reg);
      }, (err) => {
        console.error('Service worker not registered -->', err);
      });
  }
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//       navigator.serviceWorker.register('sw.js')
//           .then(reg => {
//               console.log('Registered!', reg);
//           })
//           .catch(err => {
//               console.log('Registration failed:', err);
//           });
//   });
// }
// else {
//   console.log('Service workers are not supported by this browser.');
// }  