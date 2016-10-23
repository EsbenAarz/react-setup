var React = require('react');

module.exports = React.createClass({
    render: function(){
        var registrationSuccessMessage;
        if (this.props.helperMessage !== '') {
            registrationSuccessMessage = <p> {this.props.helperMessage} </p>
        }
        return <div className="form-group">
            <input type="submit" value="Send" onClick={this.props.onSubmit}/>
            {registrationSuccessMessage}
        </div>
    }
})
