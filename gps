const getDistanceBetweenCities = require('../src/index');

const [origin, destination] = process.argv.slice(2);
getDistanceBetweenCities(origin, destination)
    .then(distance => console.log("Distance:", distance))
    .catch(error => console.error("Error:", error));
