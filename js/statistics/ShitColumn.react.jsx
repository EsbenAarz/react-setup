var React = require('react');
var moment = require('moment');
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
                poops: poops.reverse().slice(0, 20)
            });
        });
    },

    componentDidMount: function(){
        this.fetchShit();
    },

    render: function(){
        var shitRows = this.state.poops.map(function(shit){
            return {
                date: moment(shit.start_time).format('DD.MM'),
                hours: moment(shit.start_time).format('HH:mm')
            }
        }).map(function(shit) {
            return <div className="data-container--element"> {shit.date} - {shit.hours} </div>;
        });
        return <div className="data-container--column poop">
            <h3> Bæsj </h3>
            {shitRows}
        </div>
    }
});

module.exports = ShitColumn;
