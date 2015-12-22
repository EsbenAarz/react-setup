var React = require('react'),
    classNames  = require('classnames');

module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            temperature: ''
        };
    },
    componentDidMount: function(){
        window.console.log(this.props);
        this.setState({
            temperature: this.props.temperature
        });
    },
    componentWillReceiveProps : function(props){
        this.setState({
            temperature: props.temperature
        });
    },
    render: function() {
        return <div className="temperature-box">
            <div className="temperature">
                {this.state.temperature} &deg;C
            </div>
        </div>
    }

});
