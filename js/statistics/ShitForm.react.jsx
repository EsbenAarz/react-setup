var React = require('react');
var getTimestamp = require('./get-timestamp');
var moment = require('moment');
require('whatwg-fetch');
var restService = require('./RestService');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime : new moment()
        }
    },
    onStartTimeChanged: function(e){
        this.setState({
            startTime: getTimestamp(e)
        });
    },
    onSubmit: function(e){
        e.preventDefault();
        restService.postShit(this.state.startTime);
    },
    render: function(){
        return <div className="register">
            <h2>Bæsja?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="poop-time">Når?</label>
                    <input id="poop-time" type="time" value={this.state.startTime.format('HH:mm')} onChange={this.onStartTimeChanged}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send" onClick={this.onSubmit}/>
                </div>
            </form>
        </div>
    }
});
