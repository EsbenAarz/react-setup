var React = require('react');
var ShitForm = require('./ShitForm.react');
var MealForm = require('./MealForm.react');
var SleepForm = require('./SleepForm.react');
var ShitChart = require('./ShitChart.react');
var DataContainer = require('./Data.react');
var MealChart = require('./MealChart.react');
var SleepChart = require('./SleepChart.react');
module.exports = React.createClass({
    render: function() {
        return <div>
                <ShitForm/>
                <MealForm/>
                <SleepForm/>
                <ShitChart/>
                <MealChart/>
                <SleepChart/>
                <DataContainer/>
            </div>
    }
});
