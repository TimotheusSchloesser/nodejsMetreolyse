'use strict'
 
const getTimeStamp = () => {
    var now = new Date();
    return ((now.getDate() + 1) + '-' + (now.getMonth()) + '-' + now.getFullYear() + " " + now.getHours() + ':'
                  + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                  .getSeconds()) : (now.getSeconds())));
}

module.exports = getTimeStamp