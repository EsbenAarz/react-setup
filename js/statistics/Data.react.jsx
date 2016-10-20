var React = require('react');
require('whatwg-fetch');

var ShitColumn = require('./ShitColumn.react');

module.exports = React.createClass({
    render: function(){
        return <div className="data-container">
                <ShitColumn />
                <div className="data-container--column eat">
                    <h3> Eat </h3>
                    <div className="data-container--value">1000-1020</div>
                    <div className="data-container--value">1000-1120</div>
                </div>
                <div className="data-container--column sleep">
                    <h3> Sleep </h3>
                    <div className="data-container--value">0700-1000</div>
                    <div className="data-container--value">1100-1300</div>
                </div>
            </div>
    }
});
