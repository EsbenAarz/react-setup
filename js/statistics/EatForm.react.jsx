var React = require('react');
var moment = require('momentjs');
var getTimestamp = require('./get-timestamp');
var restService = require('./RestService');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment()
        }
    },

    onSubmit: function(e){
        restService.postMeal(this.state.startTime);
    },

    onStartTimeChanged: function(e){
        this.setState({
            startTime: getTimestamp(e)
        });
    },

    render: function(){
        return <div className="register">
                <h2>Har han/hun spist?</h2>
                <form className="register-form">
                    <div className="form-group">
                        <label for="eat-time">Når ble maten fortært?</label>
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
