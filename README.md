# gps-libra

## Description
gps-libra is a Node.js library that leverages Puppeteer to interact with Google Maps and retrieve various data, primarily focusing on calculating distances between cities.

## Installation
To install gps-libra, you can use npm:

```bash
npm install gps-libra


### Node.js Application

To use gps-libra in your Node.js application:

1. Install the library via npm:

npm install gps-libra

2
## Usage

const { getDistanceBetweenCities } = require('gps-libra');
Call the getDistanceBetweenCities function with the origin and destination cities as arguments:
const origin = "New York";
const destination = "Los Angeles";
try {
  const distance = await getDistanceBetweenCities(origin, destination);
  console.log("Distance:", distance);
} catch (error) {
  console.error("Error:", error);
}
