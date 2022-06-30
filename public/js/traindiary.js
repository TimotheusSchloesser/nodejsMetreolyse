

function localOutput(){

let list = document.getElementById("myList");
for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        let li = document.createElement("li");
        const sps = value.split(/[ .;?!~,„`"&|()<>{}\[\]\r\n/\\]+/)
        // let dateStr = value
        let dateStr = sps[4].concat(sps[5]," ",sps[6]).replace(/:/g," ")
        let holeStr = ". " + "| " + " " + dateStr + " | " + sps[7] + sps[8] + " | "+ sps[9] +sps[10]
        let counter = (i + 1) 
        li.innerText = counter + holeStr 

        li.addEventListener("click", e => {
            let key = localStorage.key(counter - 1)
            let keyItem = localStorage.getItem(key)
            getKey(keyItem)
            deleteKey(key)
           
        })
        list.appendChild(li); 
      } 
    } 

    function getKey(keyItem) {
        // console.log(keyItem)
        return keyItem
      }

      function deleteKey(keyItem) {
          localStorage.removeItem(keyItem)
          console.log(keyItem)
          window.location.reload()
      }
      localOutput()
      // console.log(localStorage.length)
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