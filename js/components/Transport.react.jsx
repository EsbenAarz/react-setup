var React = require('react'),
    classNames  = require('classnames'),
    fetchJsonp = require('fetch-jsonp'),
    Reise = require('./Reise.react.jsx');

var HOLDEPLASS_ID = {
	trikk: '3010312',
	buss: '3010311'
};

module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            fremtidigeReiser: []
        };
    },
    componentDidMount: function(){
    	this.timer = setInterval(this.fetchData, 60000);
    	this.fetchData();
    },

    componentDidUnmount: function() {
    	clearInterval(this.timer);
    },

    fetchData: function() {
    	var fetchURL = 'https://reisapi.ruter.no/StopVisit/GetDepartures/' + HOLDEPLASS_ID.trikk;
        var that = this;
        fetchJsonp(fetchURL, {
        	accept: 'application/json'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
        	var reiser = [];
        	data.slice(0,10).forEach(function(journey) {
        		reiser.push({
        			destinasjon: journey.MonitoredVehicleJourney.DestinationName,
        			departureTime: journey.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime,
        		});
        	});
        	window.console.log('Reiser: ', reiser);
        	that.setState({
        		fremtidigeReiser: reiser
        	});
        });
    },

    render: function() {
    	if (this.state.fremtidigeReiser.length === 0) {
    		return <div></div>
    	}
        return <div className="transport">
            <ul>
            	{this.state.fremtidigeReiser.map(function(reise) {
            		return <Reise destinasjon={reise.destinasjon} departureTime={reise.departureTime}/>
            	})}
            </ul>
        </div>
    }
});
