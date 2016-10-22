var React = require('react');
var moment = require('moment');
var getTimestamp = require('./get-timestamp');
var restService = require('./RestService');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment()
        }
    },

    onSubmit: function(e){
        e.preventDefault();
        console.log('Posting a meal. ' + this.state.startTime);
        restService.postMeal(this.state.startTime);
    },

    onStartTimeChanged: function(e){
        this.setState({
            startTime: getTimestamp(e)
        });
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
                    <div className="form-group">
                        <input type="submit" value="Send" onClick={this.onSubmit}/>
                    </div>
                </form>
            </div>
    }
})
