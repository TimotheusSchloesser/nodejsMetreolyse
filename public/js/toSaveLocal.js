'use strict'
import { traindiaryJSON } from './traindiaryJSON.js'
// import { getKey } from './traindiary.js'
 

export function toSaveLocal() {
    localStorage.setItem(Date.now(), JSON.stringify(traindiaryJSON()))
    // console.log(JSON.stringify(traindiaryJSON()))
}

export function getAllSavedLocal() {
    for (let i=0, iC=localStorage.length; i<iC; ++i) { 
        let storageKey = localStorage.key(i);
        // console.log(storageKey + ' : ' + localStorage.getItem(storageKey) );

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            // console.log({key, value})
        }
}
}
  

  
        // // Get key on a given position
        // let key1 = localStorage.key(1);
        // console.log(key1);
  
        // // Get number of stored items
        // let items = localStorage.length;
        // console.log("Total number of items is ", items);
  

  
        // // Delete everything
        // localStorage.clear();
     
