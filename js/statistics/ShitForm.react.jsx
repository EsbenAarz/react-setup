var React = require('react');
var getTimestamp = require('./get-timestamp');
var moment = require('moment');
require('whatwg-fetch');
var restService = require('./RestService');
var SubmitButton = require('./SubmitButton.react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime : new moment(),
            helperMessage: '',
            timeout: null
        }
    },
    onStartTimeChanged: function(e){
        this.setState({
            startTime: getTimestamp(e)
        });
    },
    onSubmit: function(e){
        e.preventDefault();
        var that = this;
        restService.postShit(this.state.startTime).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a shit');
                that.setHelperMessage('Registrerte en bæsj');
            } else {
                that.setHelperMessage('Registrering feilet. Feilkode: ' + res.status);
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

    render: function(){
        return <div className="register">
            <h2>Bæsja?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="poop-time">Når?</label>
                    <input id="poop-time" type="time" value={this.state.startTime.format('HH:mm')} onChange={this.onStartTimeChanged}/>
                </div>
                <SubmitButton onSubmit={this.onSubmit} helperMessage={this.state.helperMessage}/>
            </form>
        </div>
    }
});
