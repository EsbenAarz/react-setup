var React = require('react'),
    classNames  = require('classnames');


module.exports = React.createClass({
    
    getInitialState: function() {
        return {
            destinasjon: '',
            departureTime: ''
        };
    },
    componentDidMount: function(){
        this.setState({
            destinasjon: props.destinasjon,
            departureTime: props.departureTime
        });
    },
    componentWillReceiveProps : function(props){
        this.setState({
            destinasjon: props.destinasjon,
            departureTime: props.departureTime
        });
    },

    render: function() {
        return <li>
            		<div>Til: {this.state.destinasjon}</div>
            		<div>Avreise: {this.state.departureTime} </div>
            	</li>
    }

});
