import { toSaveLocal } from './toSaveLocal.js'


// let buttonToDatabase = document.getElementById("toDatabase")
let buttonToFindData = document.getElementById("findInDatabase")
let deleteAllData = document.getElementById("deleteAll")
function localOutput(){

let list = document.getElementById("myList");
if(list){
for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        let li = document.createElement("li");
        let dateJson = JSON.parse(value)
        let counter = (i + 1) 
        li.innerText =  dateJson.date + " | BPM:" + dateJson.bpm + " | ACC: " 
        + dateJson.accuracy

        li.addEventListener("click", e => {
            let key = localStorage.key(counter - 1)
            let keyItem = localStorage.getItem(key)
            getKey(keyItem)
            deleteKey(key)
           
        })
        list.appendChild(li); 
      } 
    }
  } 

    // Function to delete a clicked Item!
    function deleteKey(keyItem) {
      localStorage.removeItem(keyItem)
      if (navigator.onLine) {
        let j = localStorage.length-1
        let entry = localStorage
        toMongo('remove')
      toMongo('insertResult', entry)
      }
      window.location.reload()
      
  }
  if (navigator.onLine) {
    console.log('online');
  }
    export function insertToDatabase() {
      if (navigator.onLine) {
        let entry = localStorage
        toMongo('remove')
      toMongo('insertResult', entry)
      }
  }
    if(buttonToFindData){
    buttonToFindData.addEventListener("click", e => {
      e = 'findResults'
      toMongo(e)
      console.log(e)
    })
  }
  
    if(deleteAllData){
    deleteAllData.addEventListener("click", e => {
      e = localStorage.clear()
      toMongo('remove')
      window.location.reload()
    })
  }

   
      else {
        console.log('offline');
      }
      
      function getKey(keyItem) {
        return keyItem
      }
      localOutput()


      

     

      async function toMongo(command, entry) {
      const data = { command, entry};
      const postOptions = {method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)}
      const res = await fetch('https://lyra.et-inf.fho-emden.de:20144/api', postOptions)
      const jsonRes = await res.json()
      // console.log(jsonRes)
      // .then(res => res.json())
      // .then(data => {
      // console.log('Success'); //,data
      // })
      // .catch((error) => {
      // console.error('Error:', error);
      // });

      // console.log(localStorage.getItem('dates'))
      }