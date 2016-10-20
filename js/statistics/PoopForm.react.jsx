var React = require('react');
var getTimestamp = require('./get-timestamp');
var moment = require('momentjs');
require('whatwg-fetch');

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
        fetch('/poops', {
            method: 'POST',
            body: JSON.stringify(this.state.startTime),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            if (res.status === 204) {
                console.log('Yippi');
            }
        });
    },
    render: function(){
        return <div className="register">
            <h2>Har han/hun bæsja?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label for="poop-time">Når smalt bomben?</label>
                    <input id="poop-time" type="time" value={this.state.startTime.format('HH:mm')} onChange={this.onStartTimeChanged}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send" onClick={this.onSubmit}/>
                </div>
            </form>
        </div>
    }
});
