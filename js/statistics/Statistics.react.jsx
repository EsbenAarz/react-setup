var React = require('react');
var PoopForm = require('./PoopForm.react');
var EatForm = require('./EatForm.react');
var SleepForm = require('./SleepForm.react');
var DataContainer = require('./Data.react');
module.exports = React.createClass({
    render: function() {
        return <div>
                <PoopForm/>
                <EatForm/>
                <SleepForm/>
                <DataContainer/>
            </div>
    }
});
