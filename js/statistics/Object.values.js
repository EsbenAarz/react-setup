module.exports = function(map){
    return Object.keys(map).map(function(key) {
        return map[key];
    });
};
