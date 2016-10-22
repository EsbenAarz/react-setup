var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.react');
var Statistics = require('./statistics/Statistics.react');

if (document.getElementById('app')) {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
}
else {
    ReactDOM.render(
        <Statistics/>,
        document.getElementById('statistics')
    );
}
