import {getAllSavedLocal} from './toSaveLocal.js'


    //   let data = ["Ram", "Shyam", "Sita", "Gita"];
    //   var i;
      let list = document.getElementById("myList");
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        let li = document.createElement("li");
        li.innerText =  value
        list.appendChild(li);
        // console.log the iteration key and value
        console.log('Key: ' + key + ', Value: ' + value);  
      
      }  
      
    
    //   for (i = 0; i < localStorage.length; i++)   {
    //     //   localStorage.key(i) 
    //       let localEntry = [localStorage.getItem(localStorage.key(i))]
    //       localEntry.forEach((item) => {
    //         let li = document.createElement("li");
    //         li.innerText = "<p class='inner' id="+i+">"+ localStorage.getItem([i].date) +"</p>" + "<br>"
    //         list.appendChild(li);
    //       });
    //   }

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

    //   console.log(localStorage.getItem('dates'))