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
            fremtidigeReiser: [{
            	destinasjon: '',
            	departureTime: ''
            }]
        };
    },
    componentDidMount: function(){
    	
        var fetchURL = 'http://reisapi.ruter.no/StopVisit/GetDepartures/' + HOLDEPLASS_ID.trikk;
        var that = this;
        fetchJsonp(fetchURL, {
        	accept: 'application/json'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
        	var reiser = [];
        	data.forEach(function(journey) {
        		reiser.push({
        			destinasjon: journey.MonitoredVehicleJourney.DestinationName,
        			departureTime: journey.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime,
        		})
        	});
        	that.setState({
        		fremtidigeReiser: reiser
        	});
        });
    },

    render: function() {
    	window.console.log(this.state.fremtidigeReiser);
        return <div>
            <ul>
            	{this.state.fremtidigeReiser.map(function(reise) {
            		return <Reise destinasjon={reise.destinasjon} departureTime={reise.departureTime}/>
            	})}
            </ul>
        </div>
    }

});
