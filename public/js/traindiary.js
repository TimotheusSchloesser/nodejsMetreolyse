import {getAllSavedLocal} from './toSaveLocal.js'



var user = JSON.parse(localStorage.getItem('user'));


// const data = { username: 'example' };
//       fetch('https://lyra.et-inf.fho-emden.de:20144/api/traindiary', {
//         method: 'POST', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//       })
//       .then(response => response.json())
//       .then(data => {
//       console.log('Success:'); //,data
//       })
//       .catch((error) => {
//       console.error('Error:', error);
//       });

//       console.log(localStorage.getItem('dates'))