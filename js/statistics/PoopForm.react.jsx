var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="register">
            <h2>Har han/hun bæsja?</h2>
            <form className="register-form">
                <div className="form-group">
                    <label for="poop-time">Når smalt bomben?</label>
                    <input id="poop-time" type="time"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
    }
});
