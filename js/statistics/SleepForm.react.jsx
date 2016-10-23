var React = require('react');
var moment = require('moment');
var getTimestamp = require('./get-timestamp');
var restService = require('./RestService');
var SubmitButton = require('./SubmitButton.react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment(),
            endTime: new moment(),
            helperMessage: '',
            timeout: null
        }
    },

    onSubmit: function(e){
        e.preventDefault();
        var that = this;
        var startTime = this.state.startTime;
        var endTime = this.state.endTime;
        if (startTime > endTime) {
            startTime = startTime.subtract(1, "day");
        }
        restService.postSleep(startTime, endTime).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a sleep');
                that.setHelperMessage('Registrerte søvn');
            } else {
                that.setHelperMessage('Registrering feilet. Feilkode ' + res.status);
            }
            return res;
        });
    },

    setHelperMessage: function(message){
        var that = this;
        that.setState({
            helperMessage: message,
            timeout: setTimeout(function(){
                that.setState({
                    helperMessage: ''
                })
            }, 3000)
        });
    },

    componentWillUnmount: function(){
        clearTimeout(this.state.timeout);
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
        var that = this;
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
                <SubmitButton onSubmit={this.onSubmit} helperMessage={this.state.helperMessage}/>
            </form>
        </div>
    }
});
