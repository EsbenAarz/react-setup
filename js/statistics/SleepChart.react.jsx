var Doughnut = require('react-chartjs-2').Doughnut;
var React = require('react');
var restService = require('./RestService');
var moment = require('moment');

var data = {
    datasets: [{
        data: [
            12,
            12
        ],
        backgroundColor: [
            "#df565b",
            "#1a1a1a"
        ],
        label: 'Søvn vs våken tilstand'
    }],
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

        });
    },
    render: function(){
        if (this.state.data.labels.length === 0) {
            return <div></div>;
        }
        return <Doughnut data={this.state.data} />
    }
});
