var DEPARTURE_URL_BASE = 'https://reisapi.ruter.no/StopVisit/GetDepartures/';
var HOLDEPLASS_ID = {
    trikk: '3010312',
    buss: '3010311'
};

var state = {
    fremtidigeReiser: [],
    error: {}
};

var RuterService = {
    hentBusser: function(){
        return hentData(HOLDEPLASS_ID.buss);
    },
    hentTrikker: function(){
        return hentData(HOLDEPLASS_ID.trikk);
    },
    hentData: function(holdePlassId) {
        var options = {accept: 'application/json'};
        var FETCH_URL = DEPARTURE_URL_BASE + holdePlassId
        return fetchJsonp(FETCH_URL, options)
                .then(toJSON)
                .then(function(data) {
                    return hentNesteReiser(data, 10);
                }).catch(errorHandler);
    },
    toJSON: function(response) {
        return response.json();
    },
    hentNesteReiser: function(data, antall) {
        var reiser = [];
        antall = antall || 10;
        data.slice(0, antall).forEach(function(journey) {
            reiser.push({
                destinasjon: journey.MonitoredVehicleJourney.DestinationName,
                departureTime: journey.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime,
            });
        });
        return {
            fremtidigeReiser: reiser,
            error: {}
        };
    }
    errorHandler: function(err) {
        return {
            fremtidigeReiser: [],
            error: err
        };
    }
}

module.exports = {
    
}
