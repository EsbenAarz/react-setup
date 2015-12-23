var React = require('react'),
    classnames  = require('classnames'),
    
    RuterService = require('./RuterService.js'),
    Reise = require('./Reise.react.jsx');

var HOLDEPLASS_ID = {
	trikk: '3010312',
	buss: '3010311'
};

var FETCH_RUTER_INTERVAL = 60000; //60 sec

module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            fremtidigeReiser: [],
            error: false
        };
    },
    componentDidMount: function(){
    	this.timer = setInterval(this.fetchData, FETCH_RUTER_INTERVAL);
    	this.fetchData();
    },

    componentDidUnmount: function() {
    	clearInterval(this.timer);
    },

    fetchData: function() {
    	var that = this;
    	if (that.props.trikk) {
    		RuterService.hentTrikker().then(function(state) {
    			that.setState(state)
    		});	
    	} else if (that.props.buss) {
    		RuterService.hentBusser().then(function(state) {
    			that.setState(state)
    		});	
    	}
    	
    },

    render: function() {
    	var that = this;
    	if (this.state.fremtidigeReiser.length === 0) {
    		return <div></div>
    	}
    	var classes = classnames({
    		transport: true,
    		trikk: that.props.trikk,
    		buss: that.props.buss
    	});
    	
    	var filtrerForDestinasjon = function(reise){
    		window.console.log(reise);
    		return reise.retning === "1";
    	}
    	var filtrerForDestinasjon2 = function(reise) {
    		return reise.retning === "2";	
    	}
    	var renderReise = function(reise) {
    		return <Reise destinasjon={reise.destinasjon} departureTime={reise.departureTime}/>
    	}
        return <div className={classes}>
            <ul>
            	{this.state.fremtidigeReiser.filter(filtrerForDestinasjon).map(renderReise)}
            	<li></li>
            	{this.state.fremtidigeReiser.filter(filtrerForDestinasjon2).map(renderReise)}
            </ul>
        </div>
    },
    renderErrorMessage: function () {
    	return <div className="transport">
            <ul>
            	<li>En feil har oppstått ved lasting av ruter </li>
            	<li>{this.state.error}</li>
            </ul>
        </div>
    }
});
