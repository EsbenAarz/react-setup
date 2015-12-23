var React = require('react'),
    classNames  = require('classnames'),
    dateformat = require('dateformat');


module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            destinasjon: '',
            departureTime: ''
        };
    },
    componentDidMount: function(){
        this.setState({
            destinasjon: this.props.destinasjon,
            departureTime: this.formatTime(this.props.departureTime)
        });
    },
    componentWillReceiveProps : function(props){
        this.setState({
            destinasjon: this.props.destinasjon,
            departureTime: this.formatTime(this.props.departureTime)
        });
    },
    formatTime: function(timestamp){
        var date = timestamp ? new Date(timestamp) : new Date();
        return dateformat(date, 'HH:MM:ss');
    },
    render: function() {
        return <li>
            		<div>{this.state.destinasjon}</div>
            		<div>{this.state.departureTime} </div>
            	</li>
    }

});
