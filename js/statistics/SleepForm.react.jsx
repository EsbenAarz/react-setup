var React = require('react');
var moment = require('moment');
var getTimestamp = require('./get-timestamp');
var restService = require('./RestService');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment(),
            endTime: new moment()
        }
    },
    onSubmit: function(e){
        e.preventDefault();
        var startTime = this.state.startTime;
        var endTime = this.state.endTime;
        if (startTime > endTime) {
            startTime = startTime.subtract(1, "day");
        }
        console.log(startTime, endTime);
        restService.postSleep(startTime, endTime);
    },
    onStartTimeChanged: function(e){
        var that = this;
        this.setState({
            startTime: getTimestamp(e)
        });
    },
    onEndTimeChanged: function(e){
        var that = this;
        this.setState({
            endTime: getTimestamp(e)
        });
    },

    render: function(){
        return <div className="register">
            <h2>Sovet?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="sleepy-start-time">Når begynte søvnen?</label>
                    <input id="sleepy-start-time"
                            type="time"
                            value={this.state.startTime.format('HH:mm')}
                            onChange={this.onStartTimeChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="sleepy-end-time">Når endte søvnen?</label>
                    <input id="sleepy-end-time"
                            type="time" value={this.state.endTime.format('HH:mm')}
                            onChange={this.onEndTimeChanged}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send" onClick={this.onSubmit}/>
                </div>
            </form>
        </div>
    }
});
