var Doughnut = require('react-chartjs-2').Doughnut;
var React = require('react');
var restService = require('./RestService');
var moment = require('moment');

var data = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                "#df565b",
                "#1a1a1a"
            ],
            label: 'Søvn vs våken tilstand'
        }
    ],
    labels: [
        "Sover",
        "Våken"
    ]
};

module.exports = React.createClass({
    getInitialState: function(){
        return {
            data: data
        };
    },
    componentDidMount: function(){
        var that = this;
        restService.fetchSleep().then(function(sleeps){
            var startedTrackingAt = moment(sleeps[0].start_time);
            var now = new moment();
            var timePassedSinceTrackStarted = now.diff(startedTrackingAt);
            var sleepTime = sleeps.reduce(function(currentValue, nap) {
                var startTime = moment(nap.start_time);
                var endTime = moment(nap.end_time);
                return endTime.diff(startTime);
            }, 0);
            var data = that.state.data;
            data.datasets[0].data = [sleepTime, timePassedSinceTrackStarted - sleepTime];
            that.setState({
                data: data
            });
        });
    },
    render: function(){
        if (this.state.data.datasets[0].data.length === 0) {
            return <div></div>;
        }
        return <Doughnut data={this.state.data} />
    }
});
