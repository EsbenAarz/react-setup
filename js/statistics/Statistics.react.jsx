var React = require('react');
var ShitForm = require('./ShitForm.react');
var MealForm = require('./MealForm.react');
var SleepForm = require('./SleepForm.react');
var DataContainer = require('./Data.react');
var Charts = require('./Charts.react');

module.exports = React.createClass({
    render: function() {
        return <div>
                <ShitForm/>
                <MealForm/>
                <SleepForm/>
                <Charts />
                <DataContainer/>
            </div>
    }
});
