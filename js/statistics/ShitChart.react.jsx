var LineChart = require('react-chartjs-2').Line;
var React = require('react');
var restService = require('./RestService');
var moment = require('moment');
var ChartOptions = require('./ChartOptions');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            data: ChartOptions.data,
            options: ChartOptions.options
        };
    },
    componentDidMount: function(){
        var that = this;
        restService.fetchShit().then(function(poops){
            var data = that.state.data;
            var dataset = poops.reduce(function(values, current){
                var date = new moment(current.start_time).format('DD.MM');
                if (typeof values[date] === 'undefined' ) {
                    values[date] = 1;
                } else {
                    values[date] += 1;
                }
                return values;
            }, {});
            data.labels = Object.keys(dataset);
            data.datasets[0].data = Object.keys(dataset).map(function(key) {
                return dataset[key];
            });
            that.setState({
                data: data
            });
        });
    },
    render: function(){
        if (this.state.data.labels.length === 0) {
            return <div></div>;
        }
        return <LineChart data={this.state.data} options={this.state.options} redraw/>
    }
});
