(function () {
    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }
    const request = indexedDB.open('CRM', 1); // version 1
    request.onupgradeneeded = (event) => {
        let db = event.target.result;
        let store = db.createObjectStore('Contacts', {
            autoIncrement: true
        });

        let index = store.createIndex('email', 'email', {
            unique: true
        });
    };

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };

    request.onsuccess = (event) => {
        const db = event.target.result;

        insertContact(db, {
            email: 'john.doe@outlook.com',
            firstName: 'John',
            lastName: 'Doe',
            horst: true
        });
        insertContact(db, {
            email: 'jane.doe@gmail.com',
            firstName: 'Jane',
            lastName: 'Doe',
            karen: true
        });

        insertContact(db, {
            email: 'janet.doe@gmail.com',
            firstName: 'Jane',
            lastName: 'Doe'
        });


        insertContact(db, {
            email: 'janette.doe@gmail.com',
            firstName: 'Jane',
            lastName: 'Doe'
        });


        // get contact by id 1
        getContactById(db, 1);

        // get contact by email
        getContactByEmail(db, 'jane.doe@gmail.com');

        // get all contacts
        getAllContacts(db);

        // deleteContact(db, 1);

    };

    function insertContact(db, contact) {
        const txn = db.transaction('Contacts', 'readwrite');
        const store = txn.objectStore('Contacts');
        let query = store.put(contact);
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


    function getContactById(db, id) {
        const txn = db.transaction('Contacts', 'readonly');
        const store = txn.objectStore('Contacts');

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
    };

    function getContactByEmail(db, email) {
        const txn = db.transaction('Contacts', 'readonly');
        const store = txn.objectStore('Contacts');
        const index = store.index('email');
        let query = index.get(email);
        query.onsuccess = (event) => {
            console.table(query.result); // result objects
        };
        query.onerror = (event) => {
            console.log(event.target.errorCode);
        }
        txn.oncomplete = function () {
            db.close();
        };
    }

    function getAllContacts(db) {
        const txn = db.transaction('Contacts', "readonly");
        const objectStore = txn.objectStore('Contacts');

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
    }


    function deleteContact(db, id) {
        const txn = db.transaction('Contacts', 'readwrite');
        const store = txn.objectStore('Contacts');
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
})();