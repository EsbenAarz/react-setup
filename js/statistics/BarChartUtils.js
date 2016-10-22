var barChartMap = {
    '00-02': 0,
    '02-04': 0,
    '04-06': 0,
    '06-08': 0,
    '08-10': 0,
    '10-12': 0,
    '12-14': 0,
    '14-16': 0,
    '16-18': 0,
    '18-20': 0,
    '20-22': 0,
    '22-00': 0
}

var isInitialized = function(dataPoints) {
    for (var i = 0; i<dataPoints.length; i++) {
        if (dataPoints[i] !== 0) {
            return true;
        }
    }
    return false;
}

var getAmountOfShitsPerHours = function(){
    return Object.keys(barChartMap).map(function(key) {
        return barChartMap[key];
    });
};

var barChartData = {
    labels: Object.keys(barChartMap),
    datasets: [
        {
          label: 'Når på døgnet bæsjes det?',
          backgroundColor: '#1a1a1a',
          borderColor: '#1a1a1a',
          borderWidth: 1,
          hoverBackgroundColor: '#1a1a1a',
          hoverBorderColor: '#1a1a1a',
          data: getAmountOfShitsPerHours()
        }
    ]
}

var hourToBucket = function(hour) {
    if (hour >= 0 && hour < 2) {
        return '00-02';
    } else if (hour >= 2 && hour < 4) {
        return '02-04';
    } else if (hour >= 4 && hour < 6) {
        return '04-06';
    } else if (hour >= 6 && hour < 8) {
        return '06-08';
    } else if (hour >= 8 && hour < 10) {
        return '08-10';
    } else if (hour >= 10 && hour < 12) {
        return '10-12';
    } else if (hour >= 12 && hour < 14) {
        return '12-14';
    } else if (hour >= 14 && hour < 16) {
        return '14-16';
    } else if (hour >= 16 && hour < 18) {
        return '16-18';
    } else if (hour >= 18 && hour < 20) {
        return '18-20';
    } else if (hour >= 20 && hour < 22) {
        return '20-22';
    } else {
        return '22-00';
    }
}

module.exports = {
    barChartMap: barChartMap,
    barChartData: barChartData,
    getAmountOfShitsPerHours: getAmountOfShitsPerHours,
    hourToBucket: hourToBucket,
    isInitialized: isInitialized
}
