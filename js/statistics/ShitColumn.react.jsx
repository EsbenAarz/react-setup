var React = require('react');

var ShitColumn = React.createClass({
    getInitialState: function(){
        return {
            poops: []
        };
    },
    fetchPoops: function(){
        var that = this;
        fetch('/poops').then(function(res) {
            return res.json();
        }).then(function(poops){
            that.setState({
                poops: poops
            });
        });
    },

    componentDidMount: function(){
        this.fetchPoops();
    },

    render: function(){
        var shitRows = this.state.poops.map(function(shit) {
            return <div className="data-container--value">{shit.start_time}</div>
        });
        return <div className="data-container--column poop">
            <h3> Shit </h3>
            {shitRows}
        </div>
    }
});

module.exports = ShitColumn;
