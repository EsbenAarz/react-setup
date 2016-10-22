var BarChart = require('react-chartjs-2').Bar;
var React = require('react');
var restService = require('./RestService');
var moment = require('moment');
var ChartOptions = require('./ChartOptions');
var BarChartUtils = require('./BarChartUtils');
var values = require('./Object.values');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            data: BarChartUtils.barChartData,
            options: ChartOptions.options
        };
    },
    componentDidMount: function(){
        var that = this;
        restService.fetchShit().then(function(shits){
            var newDataSet = shits.reduce(function(map, shit) {
                var shatDuringHour = moment(shit.start_time).hour();
                var bucket = BarChartUtils.hourToBucket(shatDuringHour);
                map[bucket]++;
                return map;
            }, BarChartUtils.barChartMap);

            var dataPoints = values(newDataSet);
            var _data = that.state.data;
            _data.datasets[0].data = dataPoints;
            that.setState({
                data: _data
            })
        });
    },
    render: function(){
        if (!BarChartUtils.isInitialized(this.state.data.datasets[0].data)) {
            return <div></div>;
        }
        return <BarChart data={this.state.data} options={this.state.options} redraw/>
    }
});
