var moment = require('moment');
module.exports = function(e) {
    var time = e.target.value;
    var minutes = time.split(':')[1];
    var hours = time.split(':')[0];
    var _moment = new moment().minutes(minutes).hours(hours);
    window.console.log(_moment);
    return _moment;
};
