require('whatwg-fetch');

var toJson = function(res) {
    return res.json();
}

module.exports = {
    fetchShit: function(){
        return fetch('/shit').then(toJson);
    },
    postShit: function(startTime){
        return fetch('/shit', {
            method: 'POST',
            body: JSON.stringify({
                startTime: startTime
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a shit');
            }
        });
    },

    fetchSleep: function(){
        return fetch('/sleep').then(toJson);
    },
    postSleep: function(startTime, endTime) {
        return fetch('/sleep', {
            method: 'POST',
            body: JSON.stringify({
                startTime: startTime,
                endTime: endTime
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a sleep');
            }
        });
    },

    fetchMeal: function(){
        return fetch('/meal').then(toJson);
    },

    postMeal: function(startTime){
        return fetch('/meal', {
            method: 'POST',
            body: JSON.stringify({
                startTime: startTime
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a meal');
            }
        });
    }
}
