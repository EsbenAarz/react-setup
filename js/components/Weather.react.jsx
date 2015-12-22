var React = require('react'),
    classNames  = require('classnames'),
    Temperature = require('./Temperature.react.jsx');
require('whatwg-fetch');
module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            temperature: -1,
            weatherId: '500'
        };
    },
    componentDidMount: function(){
        var fetchURL = '/weather';
        var that = this;
        fetch(fetchURL).then(function(response) {
            return response.json();
        }).then(function(json) {
            that.setState({
                temperature: json.main.temp,
                weatherId: json.weather[0].id
            });
        });
    },

    render: function() {
        var self = this;
        var _class = classNames({
            'weather': true,
            'thunderstorm': self.state.weatherId >= 200 && self.state.weatherId < 300,
            'drizzle': self.state.weatherId >= 300 && self.state.weatherId < 400,
            'rain': self.state.weatherId >= 500 && self.state.weatherId < 600,
            'snow': self.state.weatherId >= 600 && self.state.weatherId < 700,
            'sun': self.state.weatherId === 800,
            'clouds': self.state.weatherId >= 801
        });
        return <div className={_class}>
            <Temperature temperature = {self.state.temperature} />
        </div>
    }

});
