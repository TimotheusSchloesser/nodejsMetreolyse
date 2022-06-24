'use strict'

const getTimeStamp = () => {
    var now = new Date();
    return ((now.getDate()) + '-' + (now.getMonth() + 1) + '-' + now.getFullYear() + " " + (now.getHours() + 2)+ ':'
                  + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                  .getSeconds()) : (now.getSeconds())));
}

 function toSaveLocal() {
    
    
    this.indexDBpossible = () =>  {
        if (!window.indexedDB) {
            console.log(`Your browser doesn't support IndexedDB`);
       }
    },

    this.request = () => {
        indexedDB.open('CRM', 1); // version 1
        request.onupgradeneeded = (event) => {
            let db = event.target.result;
            let store = db.createObjectStore('traindiary', {
                autoIncrement: true
            });
    
            let index = store.createIndex('date', 'date', {
                unique: true
            });
        };
    
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
        };
    
        request.onsuccess = (event) => {
            const db = event.target.result;
    
            insertContact(db, {
                id: Date.now(),
                date: getTimeStamp(),
                BPM: '100',
                Accuracy: '75'
            });
        }
    },

    //
    this.getDateByID = (db,id) => {
        const txn = db.transaction('traindiary', 'readonly');
        const store = txn.objectStore('traindiary');

        let query = store.get(id);

        query.onsuccess = (event) => {
            if (!event.target.result) {
                console.log(`The contact with ${id} not found`);
            } else {
                console.table(event.target.result);
            }
        };

        query.onerror = (event) => {
            console.log(event.target.errorCode);
        }

        txn.oncomplete = function () {
            db.close();
        };
    },
    this.insertDate= (db, date) => {
        const txn = db.transaction('traindiary', 'readwrite');
        const store = txn.objectStore('traindiary');
        let query = store.put(date);
        query.onsuccess = function (event) {
            console.log(event);
        };

        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }

        txn.oncomplete = function () {
            db.close();
        };
    },
    this.getAllDates = (db) => {
        const txn = db.transaction('traindiary', "readonly");
        const objectStore = txn.objectStore('traindiary');

        objectStore.openCursor().onsuccess = (event) => {
            let cursor = event.target.result;
            if (cursor) {
                let contact = cursor.value;
                console.log(contact);
                cursor.continue();
            }
        };
        txn.oncomplete = function () {
            db.close();
        };
    },
    this.deleteDate = (db, id) => {
        const txn = db.transaction('traindiary', 'readwrite');
        const store = txn.objectStore('traindiary');
        let query = store.delete(id);
        query.onsuccess = function (event) {
            console.log(event);
        };
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }
        txn.oncomplete = function () {
            db.close();
        };
    }
}
