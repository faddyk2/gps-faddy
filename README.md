# GPS Fahad

## Description
GPS Fahad is a Node.js library that leverages Puppeteer to interact with Google Maps and retrieve various data, primarily focusing on calculating distances between cities.

## Installation
To install GPS Fahad, you can use npm:

```bash
npm install gps-fahad


### Node.js Application

To use GPS Fahad in your Node.js application:

1. Install the library via npm:

npm install gps-fahad

2
## Usage

const { getDistanceBetweenCities } = require('gps-fahad');
Call the getDistanceBetweenCities function with the origin and destination cities as arguments:
const origin = "New York";
const destination = "Los Angeles";
try {
  const distance = await getDistanceBetweenCities(origin, destination);
  console.log("Distance:", distance);
} catch (error) {
  console.error("Error:", error);
}
