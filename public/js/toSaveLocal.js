'use strict'
import { traindiaryJSON } from './traindiaryJSON.js'
 

export function toSaveLocal() {
    localStorage.setItem(Date.now(),JSON.stringify(traindiaryJSON()))
    // console.log(JSON.stringify(traindiaryJSON()))
}

export function getAllSavedLocal() {
    for (let i=0, iC=localStorage.length; i<iC; ++i) { 
        let storageKey = localStorage.key(i);
        console.log(storageKey + ' : ' + localStorage.getItem(storageKey) );

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log({key, value})
        }
}
}