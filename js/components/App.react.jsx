var React = require('react');
var Weather = require('./Weather.react.jsx');
var Transport = require('./Transport.react.jsx');
module.exports = React.createClass({

    render: function() {
        return <div>
            <Weather/>
            <Transport trikk="true"/>
            <Transport buss="true"/>
        </div>
    }

});
