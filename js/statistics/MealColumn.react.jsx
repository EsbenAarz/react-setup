var React = require('react');
var moment = require('momentjs');
var restService = require('./RestService');

var MealColumn = React.createClass({
    getInitialState: function(){
        return {
            meals: []
        };
    },

    fetchMeal: function(){
        var that = this;
        restService.fetchMeal().then(function(meals){
            that.setState({
                meals: meals
            });
        });
    },

    componentDidMount: function(){
        this.fetchMeal();
    },

    render: function(){
        var mealRows = this.state.meals.map(function(meal){
            return {
                date: moment(meal.start_time).format('DD.MM-YYYY'),
                hours: moment(meal.start_time).format('HH:mm')
            }
        }).map(function(meal) {
            return <div> {meal.date} - {meal.hours} </div>;
        });
        return <div className="data-container--column meals">
            <h3> Meals </h3>
            {mealRows}
        </div>
    }
});

module.exports = MealColumn;
