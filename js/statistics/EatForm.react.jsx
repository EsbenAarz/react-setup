var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="register">
                <h2>Har han/hun spist?</h2>
                <form className="register-form">
                    <div className="form-group">
                        <label for="eat-time">Når ble maten fortært?</label>
                        <input id="eat-time" type="time"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
    }
})
