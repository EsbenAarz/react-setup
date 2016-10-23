var React = require('react');
var moment = require('moment');
var getTimestamp = require('./get-timestamp');
var restService = require('./RestService');
var SubmitButton = require('./SubmitButton.react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment(),
            helperMessage: '',
            timeout: null
        }
    },

    onSubmit: function(e){
        e.preventDefault();
        var that = this;
        restService.postMeal(this.state.startTime).then(function(res) {
            if (res.status === 204) {
                console.log('Posted a meal');
                that.setHelperMessage('Registrerte et måltid');
            } else {
                that.setHelperMessage('Registrering feilet. Feilkode ' + res.status);
            }
            return res;
        });
    },

    onStartTimeChanged: function(e){
        this.setState({
            startTime: getTimestamp(e)
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
                <h2>Spist?</h2>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="eat-time">Når ble maten fortært?</label>
                        <input id="eat-time" type="time"
                            value = {this.state.startTime.format('HH:mm')}
                            onChange={this.onStartTimeChanged}/>
                    </div>
                    <SubmitButton onSubmit={this.onSubmit} helperMessage={this.state.helperMessage}/>
                </form>
            </div>
    }
})
