var React = require('react');
var moment = require('momentjs');
var restService = require('./RestService');

var ShitColumn = React.createClass({
    getInitialState: function(){
        return {
            poops: []
        };
    },

    fetchShit: function(){
        var that = this;
        restService.fetchShit().then(function(poops){
            that.setState({
                poops: poops
            });
        });
    },

    componentDidMount: function(){
        this.fetchShit();
    },

    render: function(){
        var shitRows = this.state.poops.map(function(shit){
            return {
                date: moment(shit.start_time).format('DD.MM-YYYY'),
                hours: moment(shit.start_time).format('HH:mm')
            }
        }).map(function(shit) {
            return <div className="data-container--element"> {shit.date} - {shit.hours} </div>;
        });
        return <div className="data-container--column poop">
            <h3> Shit </h3>
            {shitRows}
        </div>
    }
});

module.exports = ShitColumn;
