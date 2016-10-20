var React = require('react');
var moment = require('momentjs');
var restService = require('./RestService');

var SleepColumns = React.createClass({
    getInitialState: function(){
        return {
            sleeps: []
        };
    },

    fetchSleep: function(){
        var that = this;
        restService.fetchSleep().then(function(sleeps){
            that.setState({
                sleeps: sleeps
            });
        });
    },

    componentDidMount: function(){
        this.fetchSleep();
    },

    render: function(){
        var sleepRows = this.state.sleeps.map(function(sleep){
            return {
                startDate: moment(sleep.start_time).format('DD.MM-YYYY'),
                startHours: moment(sleep.start_time).format('HH:mm'),
                endDate: moment(sleep.end_time).format('DD.MM-YYYY'),
                endHours: moment(sleep.end_time).format('HH:mm')
            }
        }).map(function(sleep) {
            return <div className="data-container--element"> {sleep.startDate} - {sleep.startHours} til {sleep.endDate} - {sleep.endHours}</div>;
        });
        return <div className="data-container--column sleep">
            <h3> Sleep </h3>
            {sleepRows}
        </div>
    }
});

module.exports = SleepColumns;
