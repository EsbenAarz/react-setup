var React = require('react');

var App = require('./components/App.react');
var Statistics = require('./statistics/Statistics.react');

if (document.getElementById('app')) {
    React.renderComponent(
        <App />,
        document.getElementById('app')
    );
}
else {
    React.renderComponent(
        <Statistics/>,
        document.getElementById('statistics')
    );
}
