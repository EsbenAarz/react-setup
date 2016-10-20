var React = require('react');
var moment = require('momentjs');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startTime: new moment(),
            endTime: new moment()
        }
    },
    onSubmit: function(e){
        window.console.log(this.state);
        e.preventDefault();
    },
    onStartTimeChanged: function(e){
        var that = this;
        this.setState({
            startTime: that.getTimestamp(e)
        });
    },
    onEndTimeChanged: function(e){
        var that = this;
        this.setState({
            endTime: that.getTimestamp(e)
        });
    },
    getTimestamp: function(e) {
        var time = e.target.value;
        var minutes = time.split(':')[1];
        var hours = time.split(':')[0];
        var _moment = new moment().minutes(minutes).hours(hours);
        window.console.log(_moment);
        return _moment;
    },
    render: function(){
        return <div className="register">
            <h2>Har han/hun sovet?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label for="sleepy-start-time">Når begynte søvnen?</label>
                    <input id="sleepy-start-time"
                            type="time"
                            value={this.state.startTime.format('HH:mm')}
                            onChange={this.onStartTimeChanged}/>
                </div>
                <div className="form-group">
                    <label for="sleepy-end-time">Når endte søvnen?</label>
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
