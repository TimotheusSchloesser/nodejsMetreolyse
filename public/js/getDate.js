'use strict'
 
const getTimeStamp = () => {
    var now = new Date();
    return ((now.getDate()) + '-' + (now.getMonth() + 1) + '-' + now.getFullYear() + " " + (now.getHours() + 2)+ ':'
                  + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                  .getSeconds()) : (now.getSeconds())));
}

module.exports = getTimeStamp