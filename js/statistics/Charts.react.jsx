var React = require('react');
var ShitChart = require('./ShitChart.react');
var ShitBarChart = require('./ShitBarChart.react');
var MealChart = require('./MealChart.react');
var SleepChart = require('./SleepChart.react');

module.exports = React.createClass({
    render: function(){
        return <div>
            <ShitChart/>
            <ShitBarChart/>
            <MealChart/>
            <SleepChart/>
        </div>
    }
})
