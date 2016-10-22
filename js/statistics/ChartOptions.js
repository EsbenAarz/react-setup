var data = function(label){
    return {
        labels: [],
        datasets: [
            {
                label: label,
                data: [],
                fill: true,
                lineTension: 0.1,
                backgroundColor: "#1a1a1a",
                borderColor: "#1a1a1a",
                scaleFontColor: "#1a1a1a"
            }
        ]
    }
}

var defaultFontOptions = {
    fontColor:"#1a1a1a",
    fontSize: 14
}

var options = {
    legend: {
        labels: defaultFontOptions
    },
    scales: {
        yAxes: [{
            ticks: defaultFontOptions
        }],
        xAxes: [{
            ticks: defaultFontOptions
        }]
    }
}

module.exports = {
    data: data,
    options: options
};
