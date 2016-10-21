var React = require('react');
require('whatwg-fetch');

var ShitColumn = require('./ShitColumn.react');
var MealColumn = require('./MealColumn.react');
var SleepColumn = require('./SleepColumn.react');

module.exports = React.createClass({
    render: function(){
        return <div className="data-container">
                <h2> Siste registreringer </h2>
                <ShitColumn />
                <MealColumn />
                <SleepColumn />
            </div>
    }
});
